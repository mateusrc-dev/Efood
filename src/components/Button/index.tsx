import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  style: 'primary' | 'secondary'
  title: string
  onClick?: () => void
  children: string
}

const Button = ({ style, children, title, onClick }: Props) => {
  if (style === 'primary') {
    return (
      <ButtonContainer title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonLink title={title} onClick={onClick}>
        {children}
      </ButtonLink>
    )
  }
}

export default Button
