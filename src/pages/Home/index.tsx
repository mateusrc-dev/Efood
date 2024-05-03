import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'
// import Restaurant from '../../models/Restaurant'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
  descricao: string
  cardapio: {
    descricao: string
    foto: string
    id: number
    nome: string
    porcao: string
    preco: number
  }[]
}

export type Cardapio = {
  descricao: string
  foto: string
  id: number
  nome: string
  porcao: string
  preco: number
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header type="primary" />
      <RestaurantsList isLoading={isLoading} restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
