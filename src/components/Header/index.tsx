import { Link } from 'react-router-dom'

import { HeaderBar, KartContainer, TextsContainer } from './styles'

import logo from '../../assets/images/logo_efood.svg'
import lixo from '../../assets/images/lixeira-de-reciclagem.svg'
import background from '../../assets/images/fundo_header_efood.png'
import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/reducers/cart'

export type Props = {
  type: 'primary' | 'secondary'
}

const Header = ({ type }: Props) => {
  const [state, setState] = useState(false)
  const [purchasePhase, setPurchasePhase] = useState(0)

  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  type ClickEventDiv = React.MouseEvent<HTMLDivElement>

  function purchaseCompleted() {
    handleState()
    setPurchasePhase(0)
  }

  function handleState() {
    if (state === false) {
      setState(true)
    } else {
      setState(false)
    }
  }

  const handleOutsideClick = (e: ClickEventDiv) => {
    if (e.target instanceof HTMLElement && e.target.id === 'modal') {
      if (state === false) {
        setState(true)
      } else {
        setState(false)
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
          className={state ? 'modal' : 'none'}
          onClick={handleOutsideClick}
        >
          {purchasePhase === 0 && (
            <div className="modalContent">
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
            </div>
          )}
          {purchasePhase === 1 && (
            <div className="modalContent">
              <h3>Entrega</h3>
              <Input label="Quem irá receber" />
              <Input label="Endereço" />
              <Input label="Cidade" />
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '34px' }}
              >
                <div>
                  <Input label="CEP" />
                </div>
                <div>
                  <Input label="Número" />
                </div>
              </div>
              <Input label="Complemento (opcional)" />
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
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  style="primary"
                  title="Voltar para o carrinho"
                  onClick={() => setPurchasePhase(0)}
                >
                  Voltar para o carrinho
                </Button>
              </div>
            </div>
          )}
          {purchasePhase === 2 && (
            <div className="modalContent">
              <h3>Pagamento - Valor a pagar R$ 190,90</h3>
              <Input label="Nome no cartão" />
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
              >
                <div style={{ minWidth: '228px' }}>
                  <Input label="Número do cartão" />
                </div>
                <Input label="CVV" />
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '34px' }}
              >
                <div>
                  <Input label="Mês de vencimento" />
                </div>
                <div>
                  <Input label="Ano de vencimento" />
                </div>
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
                  title="Finalizar pagamento"
                  onClick={() => setPurchasePhase(3)}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  style="primary"
                  title="Voltar para a edição de endereço"
                  onClick={() => setPurchasePhase(1)}
                >
                  Voltar para a edição de endereço
                </Button>
              </div>
            </div>
          )}
          {purchasePhase === 3 && (
            <div className="modalContent">
              <h3>{'Pedido realizado - {ORDER_ID}'}</h3>
              <span>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
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
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </span>
              <Button
                style="primary"
                title="Concluir"
                onClick={purchaseCompleted}
              >
                Concluir
              </Button>
            </div>
          )}
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
