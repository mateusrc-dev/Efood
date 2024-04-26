import { Container, InputContainer, LabelContainer } from './styles'

type Props = {
  label: string
  setState?: (e: string) => void
}

const Input = ({ label, setState }: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (setState && e.target.value !== undefined) {
      setState(e.target.value)
    }
  }

  return (
    <Container>
      <LabelContainer>{label}</LabelContainer>
      <InputContainer onChange={(e) => handleChange(e)} />
    </Container>
  )
}

export default Input
