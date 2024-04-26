import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`

export const LabelContainer = styled.label`
  color: ${cores.orange_200};
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: start;
`

export const InputContainer = styled.input`
  background-color: ${cores.orange_200};
  color: ${cores.black_100};
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
  line-height: 16.41px;
  margin-bottom: 8px;

  &:hover {
    filter: brightness(0.8);
  }
`
