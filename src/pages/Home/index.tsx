import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'
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
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <>Carregando...</>
  }

  return (
    <>
      <Header type="primary" />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
