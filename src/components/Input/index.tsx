import { Container, InputContainer, LabelContainer } from './styles'

type Props = {
  label: string
  onChange?: (e: string) => void
  onBlur?: (e: string) => void
  id: string
  name: string
  type: string
  value: string
  isInvalid: boolean
}

const Input = ({
  label,
  onChange,
  id,
  name,
  onBlur,
  type,
  value,
  isInvalid
}: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange && e.target.value !== undefined) {
      onChange(e.target.value)
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (onBlur && e.target.value !== undefined) {
      onBlur(e.target.value)
    }
  }

  return (
    <Container>
      <LabelContainer>{label}</LabelContainer>
      <InputContainer
        onChange={(e) => handleChange(e)}
        id={id}
        name={name}
        onBlur={handleBlur}
        type={type}
        value={value}
        className={isInvalid ? 'is-invalid' : ''}
      />
    </Container>
  )
}

export default Input
