import Header from '../../components/Header'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishsList'
import { useParams } from 'react-router-dom'
import { Restaurant } from '../Home'
import { useEffect, useState } from 'react'

const RestaurantDetails = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
