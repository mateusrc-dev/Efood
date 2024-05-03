import Header from '../../components/Header'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishsList'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'

const RestaurantDetails = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading } = useGetRestaurantQuery(String(id))

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header type="secondary" />
      <Banner
        dishType={restaurant?.tipo}
        restaurantName={restaurant?.titulo}
        restaurantImage={restaurant?.capa}
      />
      <DishesList dishes={restaurant?.cardapio} />
      <Footer />
    </>
  )
}

export default RestaurantDetails
