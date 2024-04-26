import { useEffect, useState } from 'react'
import DishModel from '../../models/Dish'
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

import dish from '../../assets/images/PizzaMargueritaModal.png'
import close from '../../assets/images/close.svg'

type ClickEventDiv = React.MouseEvent<HTMLDivElement>

export type Props = {
  dishes: DishModel[]
}

const DishesList = ({ dishes }: Props) => {
  const [state, setState] = useState(false)
  const [topPosition, setTopPosition] = useState(0)

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

  function handleAddInKart(id: number) {
    handleState()
    console.log(id)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      console.log(scrollPosition)

      setTopPosition(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [state])

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
        style={{ top: `${topPosition}px` }}
      >
        {state && (
          <div className="container">
            <ModalComponent>
              <CloseContainer onClick={handleState}>
                <img src={close} alt="fechar" />
              </CloseContainer>
              <ModalImage src={dish} />
              <ColumnContainer>
                <h2>Pizza Marguerita</h2>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                  <br />
                  <br />
                  Serve: de 2 a 3 pessoas
                </p>
                <ButtonDish>
                  <Button style="primary" title="Sair" onClick={handleState}>
                    Adicionar ao carrinho - R$ 60,90
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
              description={dish.description}
              image={dish.image}
              title={dish.title}
              id={dish.id}
              onClick={handleAddInKart}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default DishesList
