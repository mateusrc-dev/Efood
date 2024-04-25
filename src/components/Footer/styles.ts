import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.orange_200};
  font-size: 10px;
  line-height: 11.72px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 40px;
    margin-bottom: 32.5px;
  }

  p {
    margin-bottom: 40px;
    max-width: 480px;
    text-align: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-bottom: 80px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;

  img {
    margin: 0px;
  }
`
