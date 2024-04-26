import Button from '../Button'
import { Card, Descricao, Main, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  id: number
  onClick: (id: number) => void
}

const Dish = ({ description, image, title, id, onClick }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Card>
      <Main>
        <img src={image} alt={title} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          style="primary"
          title="Adicionar ao carrinho"
          onClick={() => onClick(id)}
        >
          Adicionar ao carrinho
        </Button>
      </Main>
    </Card>
  )
}

export default Dish
