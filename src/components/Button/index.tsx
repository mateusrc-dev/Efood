import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type ClickEvent = React.MouseEvent<HTMLButtonElement>

type Props = {
  style: 'primary' | 'secondary'
  title: string
  onClick?: (e: ClickEvent) => void
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
