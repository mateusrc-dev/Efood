import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;

  .modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .none {
    display: none;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const ModalComponent = styled.div`
  position: relative;
  width: 100%;
  height: 344px;
  background-color: ${cores.orange_100};
  padding: 32px;
  display: flex;
  align-items: start;
  gap: 24px;
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  color: ${cores.white_100};

  h2 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ButtonDish = styled.div`
  ${ButtonContainer} {
    font-size: 14px;
    max-width: 218px;
    font-weight: 700;
    padding-inline: 6px;
  }
`

export const CloseContainer = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.6);
  }
`
