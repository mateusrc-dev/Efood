// import RestaurantModel from '../../models/Restaurant'
import { Restaurant as RestaurantType } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurants?: RestaurantType[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: RestaurantType) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 230) {
      return descricao.slice(0, 230) + '...'
    }
    return descricao
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants?.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              description={getDescricao(restaurant.descricao)}
              image={restaurant.capa}
              infos={getRestaurantTags(restaurant)}
              title={restaurant.titulo}
              assessment={restaurant.avaliacao}
              navigation={`restaurant-details/${restaurant.id}`}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
