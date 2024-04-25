import styled from 'styled-components'
import { Props } from '.'

export const HeaderBar = styled.header<Props>`
  width: 100%;
  height: ${(props) => (props.type === 'primary' ? '384px' : '186px')};
  padding-top: 46px;

  .container {
    display: flex;
    flex-direction: ${(props) => (props.type === 'primary' ? 'column' : 'row')};
    align-items: center;
    justify-content: ${(props) =>
      props.type === 'primary' ? 'center' : 'space-between'};
  }

  p {
    margin-top: 138.5px;
    max-width: 539px;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }
`

export const TextsContainer = styled.span`
  line-height: 21.09px;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
`
