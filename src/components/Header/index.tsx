import { Link } from 'react-router-dom'

import { HeaderBar, KartContainer, TextsContainer } from './styles'

import logo from '../../assets/images/logo_efood.svg'
import pizza from '../../assets/images/PizzaMargueritaModal2.png'
import lixo from '../../assets/images/lixeira-de-reciclagem.svg'
import background from '../../assets/images/fundo_header_efood.png'
import { useEffect, useState } from 'react'
import Button from '../Button'

export type Props = {
  type: 'primary' | 'secondary'
}

const Header = ({ type }: Props) => {
  const [state, setState] = useState(false)
  const [topPosition, setTopPosition] = useState(0)

  type ClickEventDiv = React.MouseEvent<HTMLDivElement>

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
          style={{ top: `${topPosition}px` }}
        >
          <div className="modalContent">
            <div className="itemsContainer">
              <div className="modalItem">
                <img src={pizza} alt="Pizza" />
                <div className="modalItemText">
                  <h3>Pizza Marguerita</h3>
                  <span>R$ 60,90</span>
                </div>
                <button>
                  <img src={lixo} alt="Lixo" />
                </button>
              </div>
              <div className="modalItem">
                <img src={pizza} alt="Pizza" />
                <div className="modalItemText">
                  <h3>Pizza Marguerita</h3>
                  <span>R$ 60,90</span>
                </div>
                <button>
                  <img src={lixo} alt="Lixo" />
                </button>
              </div>
              <div className="modalItem">
                <img src={pizza} alt="Pizza" />
                <div className="modalItemText">
                  <h3>Pizza Marguerita</h3>
                  <span>R$ 60,90</span>
                </div>
                <button>
                  <img src={lixo} alt="Lixo" />
                </button>
              </div>
            </div>
            <div className="valorTotal">
              <span>Valor total</span>
              <span>R$ 182,70</span>
            </div>
            <Button style="primary" title="Continuar com a entrega">
              Continuar com a entrega
            </Button>
          </div>
        </div>
        <div className="container">
          <TextsContainer>Restaurantes</TextsContainer>
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
          <KartContainer onClick={handleState}>
            0 produto(s) no carrinho
          </KartContainer>
        </div>
      </HeaderBar>
    )
  }
}

export default Header
