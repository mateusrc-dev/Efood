import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.orange_100};
  color: ${cores.orange_200};
`

export const Main = styled.main`
  padding: 8px;

  > img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  margin-top: 8px;
  font-weight: 900;
  font-size: 16px;
  line-height: 18.75px;
`

export const Descricao = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`
