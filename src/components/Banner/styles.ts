import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  img {
    width: 100%;
    height: 280px;
    background-repeat: no-repeat;
    filter: brightness(0.6);
    background-size: cover;
  }
`

export const Titulo = styled.h2`
  top: 24px;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  color: ${cores.white_100};
  position: absolute;
`

export const RestaurantName = styled.h2`
  bottom: 32px;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  color: ${cores.white_100};
  position: absolute;
`
