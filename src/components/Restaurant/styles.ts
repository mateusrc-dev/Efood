import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.white_100};
  display: flex;
  flex-direction: column;

  > img {
    max-width: 472px;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Main = styled.main`
  border: 1px solid ${cores.orange_100};
  border-top: 0px;
  padding: 8px;
  max-height: 100%;
  max-height: 181px;
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
