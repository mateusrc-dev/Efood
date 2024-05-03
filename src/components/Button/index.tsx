import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type ClickEvent = React.MouseEvent<HTMLButtonElement>

type Props = {
  style: 'primary' | 'secondary'
  title: string
  onClick?: (e: ClickEvent) => void
  children: string
  type?: 'button' | 'submit'
}

const Button = ({
  style,
  children,
  title,
  onClick,
  type = 'button'
}: Props) => {
  if (style === 'primary') {
    return (
      <ButtonContainer type={type} title={title} onClick={onClick}>
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
