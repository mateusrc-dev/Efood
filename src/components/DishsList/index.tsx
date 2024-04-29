import { useState } from 'react'
import Dish from '../Dish'
import {
  ButtonDish,
  CloseContainer,
  ColumnContainer,
  Container,
  List,
  ModalComponent,
  ModalImage
} from './styles'
import Button from '../Button'

import close from '../../assets/images/close.svg'
import { Cardapio } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type ClickEventDiv = React.MouseEvent<HTMLDivElement>

export type Props = {
  dishes: Cardapio[]
}

const DishesList = ({ dishes }: Props) => {
  const [state, setState] = useState(false)
  const [dishSelected, setDishSelected] = useState<Cardapio>()

  const dispatch = useDispatch()

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

  function handleAddInKart(dish: Cardapio) {
    setDishSelected({
      descricao: dish.descricao,
      foto: dish.foto,
      id: dish.id,
      nome: dish.nome,
      porcao: dish.porcao,
      preco: dish.preco
    })
    handleState()
  }

  const addDishInCart = () => {
    if (dishSelected) {
      dispatch(add(dishSelected))
      dispatch(open())
      handleState()
    }
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <Container>
      <div
        id="modal"
        className={state ? 'modal' : 'none'}
        onClick={handleOutsideClick}
      >
        <div className="modalContent">modal ao lado</div>
      </div>
      <div
        id="modal"
        className={state ? 'modal' : 'none'}
        onClick={(e: ClickEventDiv) => handleOutsideClick(e)}
      >
        {state && (
          <div className="container">
            <ModalComponent>
              <CloseContainer onClick={handleState}>
                <img src={close} alt="fechar" />
              </CloseContainer>
              <ModalImage src={dishSelected?.foto} />
              <ColumnContainer>
                <h2>{dishSelected?.nome}</h2>
                <p>
                  {dishSelected?.descricao}
                  <br />
                  <br />
                  Serve: de {dishSelected?.porcao}
                </p>
                <ButtonDish>
                  <Button style="primary" title="Sair" onClick={addDishInCart}>
                    {`Adicionar ao carrinho - R$ ${String(
                      Number(dishSelected?.preco).toFixed(2)
                    ).replace('.', ',')}`}
                  </Button>
                </ButtonDish>
              </ColumnContainer>
            </ModalComponent>
          </div>
        )}
      </div>
      <div className="container">
        <List>
          {dishes.map((dish) => (
            <Dish
              key={dish.id}
              description={getDescricao(dish.descricao)}
              image={dish.foto}
              title={dish.nome}
              id={dish.id}
              onClick={() => handleAddInKart(dish)}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default DishesList
