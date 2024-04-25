import RestaurantModel from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            title={restaurant.title}
            assessment={restaurant.assessment}
            navigation={`restaurant-details/${restaurant.id}`}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
