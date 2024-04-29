import Header from '../../components/Header'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishsList'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

const RestaurantDetails = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(String(id))

  if (!restaurant) {
    return <>Carregando...</>
  }

  return (
    <>
      <Header type="secondary" />
      <Banner
        dishType={restaurant.tipo}
        restaurantName={restaurant.titulo}
        restaurantImage={restaurant.capa}
      />
      <DishesList dishes={restaurant.cardapio} />
    </>
  )
}

export default RestaurantDetails
