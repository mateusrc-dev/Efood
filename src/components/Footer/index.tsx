import { Container, Link, Links } from './styles'

import logo from '../../assets/images/logo_efood.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <img src={logo} alt="Logo EFOOD" />
    <Links>
      <li>
        <Link>
          <img src={instagram} alt="Instagram" />
        </Link>
        <Link>
          <img src={facebook} alt="Facebook" />
        </Link>
        <Link>
          <img src={twitter} alt="Twitter" />
        </Link>
      </li>
    </Links>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </Container>
)

export default Footer
