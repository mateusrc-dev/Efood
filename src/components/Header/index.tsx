import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { HeaderBar, KartContainer, TextsContainer } from './styles'

import logo from '../../assets/images/logo_efood.svg'
import lixo from '../../assets/images/lixeira-de-reciclagem.svg'
import background from '../../assets/images/fundo_header_efood.png'
import { useEffect, useState } from 'react'
import Button from '../Button'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { remove, open, close, clear } from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePaymentMutation } from '../../services/api'

export type Props = {
  type: 'primary' | 'secondary'
}

const Header = ({ type }: Props) => {
  const [purchasePhase, setPurchasePhase] = useState(0)

  const [payment, { isSuccess, isLoading, data }] = usePaymentMutation()

  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      whoWillReceive: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      CVV: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      whoWillReceive: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      nameCard: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numberCard: Yup.string().required('O campo é obrigatório'),
      CVV: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      payment({
        delivery: {
          address: {
            city: values.city,
            complement: values.complement,
            description: values.address,
            number: Number(values.number),
            zipCode: values.cep
          },
          receiver: values.whoWillReceive
        },
        payment: {
          card: {
            code: Number(values.CVV),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            },
            name: values.nameCard,
            number: values.numberCard
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const getInvalidField = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const fieldIsInvalid = isTouched && isInvalid

    return fieldIsInvalid
  }

  type ClickEventDiv = React.MouseEvent<HTMLDivElement>

  function purchaseCompleted() {
    handleState()
    setPurchasePhase(0)
  }

  function handleState() {
    if (isOpen === false) {
      dispatch(open())
    } else {
      dispatch(close())
    }
  }

  const handleOutsideClick = (e: ClickEventDiv) => {
    if (e.target instanceof HTMLElement && e.target.id === 'modal') {
      if (isOpen === false) {
        dispatch(open())
      } else {
        dispatch(close())
      }
    }
  }

  const removeDishOfCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      } else {
        return (acumulador += 0)
      }
    }, 0)
  }

  useEffect(() => {
    function handleSubmit() {
      if (isSuccess) {
        setPurchasePhase(3)
        dispatch(clear())
      }
    }

    handleSubmit()
  }, [isSuccess, dispatch])

  if (type === 'primary') {
    return (
      <HeaderBar type={type} style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
          <p>Viva experiências gastronômicas no conforto da sua casa</p>
        </div>
      </HeaderBar>
    )
  } else {
    return (
      <HeaderBar type={type} style={{ backgroundImage: `url(${background})` }}>
        <div
          id="modal"
          className={isOpen ? 'modal' : 'none'}
          onClick={handleOutsideClick}
        >
          <div className="modalContent">
            {purchasePhase === 0 &&
              (items.length === 0 ? (
                <p className="empty-car">
                  Coloque algum item no carrinho antes de prosseguir com o
                  pagamento!!!
                </p>
              ) : (
                <>
                  <div className="itemsContainer">
                    {items.map((item) => (
                      <div className="modalItem" key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div className="modalItemText">
                          <h3>{item.nome}</h3>
                          <span>{`R$ ${String(
                            Number(item?.preco).toFixed(2)
                          ).replace('.', ',')}`}</span>
                        </div>
                        <button onClick={() => removeDishOfCart(item.id)}>
                          <img src={lixo} alt="Lixo" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="valorTotal">
                    <h4>Valor total</h4>
                    <h4>
                      R$ {String(getTotalPrice().toFixed(2)).replace('.', ',')}
                    </h4>
                  </div>
                  <Button
                    style="primary"
                    title="Continuar com a entrega"
                    onClick={() => setPurchasePhase(1)}
                  >
                    Continuar com a entrega
                  </Button>
                </>
              ))}
            <form onSubmit={form.handleSubmit}>
              {purchasePhase === 1 && (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <label>Quem irá receber</label>
                    <input
                      id="whoWillReceive"
                      name="whoWillReceive"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      value={form.values.whoWillReceive}
                      className={
                        getInvalidField('whoWillReceive') ? 'is-invalid' : ''
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <label>Endereço</label>
                    <input
                      id="address"
                      name="address"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      value={form.values.address}
                      className={getInvalidField('address') ? 'is-invalid' : ''}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <label>Cidade</label>
                    <input
                      id="city"
                      name="city"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      value={form.values.city}
                      className={getInvalidField('city') ? 'is-invalid' : ''}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '34px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <label>CEP</label>
                      <InputMask
                        id="cep"
                        name="cep"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        value={form.values.cep}
                        className={getInvalidField('cep') ? 'is-invalid' : ''}
                        mask="99999-999"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <label>Número</label>
                      <input
                        id="number"
                        name="number"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        value={form.values.number}
                        className={
                          getInvalidField('number') ? 'is-invalid' : ''
                        }
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <label>Complemento (opcional)</label>
                    <input
                      id="complement"
                      name="complement"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      value={form.values.complement}
                      className={
                        getInvalidField('complement') ? 'is-invalid' : ''
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginTop: '24px'
                    }}
                  >
                    <Button
                      style="primary"
                      title="Continuar com o pagamento"
                      onClick={() => setPurchasePhase(2)}
                      type="button"
                    >
                      Continuar com o pagamento
                    </Button>
                    <Button
                      style="primary"
                      title="Voltar para o carrinho"
                      onClick={() => setPurchasePhase(0)}
                      type="button"
                    >
                      Voltar para o carrinho
                    </Button>
                  </div>
                </div>
              )}
              {purchasePhase === 2 && (
                <div>
                  <h3>Pagamento - Valor a pagar R$ 190,90</h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <label>Nome no cartão</label>
                    <input
                      id="nameCard"
                      name="nameCard"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      type="text"
                      value={form.values.nameCard}
                      className={
                        getInvalidField('nameCard') ? 'is-invalid' : ''
                      }
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '30px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: '228px'
                      }}
                    >
                      <label>Número do cartão</label>
                      <InputMask
                        id="numberCard"
                        name="numberCard"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        value={form.values.numberCard}
                        className={
                          getInvalidField('numberCard') ? 'is-invalid' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <label>CVV</label>
                      <InputMask
                        id="CVV"
                        name="CVV"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        value={form.values.CVV}
                        className={getInvalidField('CVV') ? 'is-invalid' : ''}
                        mask="999"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '34px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <label>Mês de vencimento</label>
                      <InputMask
                        id="expiresMonth"
                        name="expiresMonth"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        value={form.values.expiresMonth}
                        className={
                          getInvalidField('expiresMonth') ? 'is-invalid' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <label>Ano de vencimento</label>
                      <InputMask
                        id="expiresYear"
                        name="expiresYear"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        type="text"
                        value={form.values.expiresYear}
                        className={
                          getInvalidField('expiresYear') ? 'is-invalid' : ''
                        }
                        mask="9999"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: '16px',
                      gap: '8px'
                    }}
                  >
                    <Button
                      style="primary"
                      title="Finalizar pagamento"
                      type="submit"
                    >
                      {isLoading
                        ? 'Finalizando pagamento...'
                        : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      style="primary"
                      title="Voltar para a edição de endereço"
                      onClick={() => setPurchasePhase(1)}
                      type="button"
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </div>
                </div>
              )}
            </form>

            {purchasePhase === 3 && data ? (
              <div className="modalItemText">
                <h3>{`Pedido realizado - ${data.orderId}`}</h3>
                <span style={{ display: 'flex', marginBottom: '24px' }}>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                  <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </span>
                <Button
                  style="primary"
                  title="Concluir"
                  onClick={purchaseCompleted}
                >
                  Concluir
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="container">
          <TextsContainer>Restaurantes</TextsContainer>
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
          <KartContainer onClick={handleState}>
            {items.length} produto(s) no carrinho
          </KartContainer>
        </div>
      </HeaderBar>
    )
  }
}

export default Header
