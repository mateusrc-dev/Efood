import { Link } from 'react-router-dom'

import { HeaderBar, TextsContainer } from './styles'

import logo from '../../assets/images/logo_efood.svg'
import background from '../../assets/images/fundo_header_efood.png'

export type Props = {
  type: 'primary' | 'secondary'
}

const Header = ({ type }: Props) => {
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
        <div className="container">
          <TextsContainer>Restaurantes</TextsContainer>
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
          <TextsContainer>0 produto(s) no carrinho</TextsContainer>
        </div>
      </HeaderBar>
    )
  }
}

export default Header
