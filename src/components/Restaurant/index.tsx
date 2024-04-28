import Button from '../Button'
import Tag from '../Tag'
import {
  AssessmentContainer,
  Card,
  Descricao,
  Infos,
  Main,
  TitleAndAssessment,
  Titulo
} from './styles'
import star from '../../assets/images/estrela.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  assessment: number
  navigation: string
}

const Restaurant = ({
  description,
  image,
  infos,
  title,
  assessment,
  navigation
}: Props) => {
  const navigate = useNavigate()

  function handleNavigation() {
    navigate(`/${navigation}`)
  }
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Main>
        <TitleAndAssessment>
          <Titulo>{title}</Titulo>
          <AssessmentContainer>
            <span>{String(assessment).replace('.', ',')}</span>
            <img src={star} alt="Estrela" />
          </AssessmentContainer>
        </TitleAndAssessment>
        <Descricao>{description}</Descricao>
        <Button style="secondary" title="Saiba mais" onClick={handleNavigation}>
          Saiba mais
        </Button>
      </Main>
    </Card>
  )
}

export default Restaurant
