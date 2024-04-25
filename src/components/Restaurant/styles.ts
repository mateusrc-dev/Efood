import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.white_100};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Main = styled.main`
  padding: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 21.09px;
  display: block;
`

export const TitleAndAssessment = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const AssessmentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21.09px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
