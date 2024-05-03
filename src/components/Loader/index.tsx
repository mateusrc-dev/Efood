import { HashLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <HashLoader color={cores.orange_100} />
  </Container>
)

export default Loader
