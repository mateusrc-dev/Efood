import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.orange_200};
  color: ${cores.orange_100};
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
  line-height: 16.41px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`

export const ButtonLink = styled.button`
  background-color: ${cores.orange_100};
  color: ${cores.orange_200};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
