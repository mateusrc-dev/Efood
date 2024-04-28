import { Imagem, RestaurantName, Titulo } from './styles'

type Props = {
  dishType: string
  restaurantName: string
  restaurantImage: string
}

const Banner = ({ dishType, restaurantName, restaurantImage }: Props) => (
  <Imagem>
    <img src={restaurantImage} alt={restaurantName} />
    <div className="container">
      <Titulo>{dishType}</Titulo>
      <RestaurantName>{restaurantName}</RestaurantName>
    </div>
  </Imagem>
)

export default Banner
