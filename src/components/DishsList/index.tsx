import DishModel from '../../models/Dish'
import Dish from '../Dish'
import { Container, List } from './styles'

export type Props = {
  dishes: DishModel[]
}

const DishesList = ({ dishes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            description={dish.description}
            image={dish.image}
            title={dish.title}
            id={dish.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default DishesList
