import { Imagem, RestaurantName, Titulo } from './styles'

import LaDolceVitaTrattoriaBanner from '../../assets/images/LaDolceVitaTrattoriaBanner.png'

type Props = {
  dishType: string
  restaurantName: string
}

const Banner = ({ dishType, restaurantName }: Props) => (
  <Imagem>
    <img src={LaDolceVitaTrattoriaBanner} alt={restaurantName} />
    <div className="container">
      <Titulo>{dishType}</Titulo>
      <RestaurantName>{restaurantName}</RestaurantName>
    </div>
  </Imagem>
)

export default Banner
