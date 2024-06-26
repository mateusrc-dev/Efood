import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

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

  .modal {
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    .modalContent {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      background-color: ${cores.orange_100};
      min-height: 100vh;
      padding-top: 32px;
      padding-inline: 8px;
      width: 360px;
      box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

      label {
        color: ${cores.orange_200};
        font-size: 14px;
        font-weight: 700;
        line-height: 16.41px;
        text-align: start;
        margin-bottom: 8px;
      }

      input {
        background-color: ${cores.orange_200};
        color: ${cores.black_100};
        width: 100%;
        border: none;
        font-size: 14px;
        font-weight: 700;
        padding: 8px;
        line-height: 16.41px;
        margin-bottom: 8px;

        &.is-invalid {
          border: 2px solid rgb(1000, 0, 1000);
        }

        &:hover {
          filter: brightness(0.8);
        }
      }

      .empty-car {
        color: ${cores.branca};
        font-size: 16px;
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-style: italic;
      }

      h3 {
        color: ${cores.orange_200};
        font-weight: 700;
        font-size: 16px;
        line-height: 18.75px;
        margin-bottom: 16px;
      }
      span {
        color: ${cores.orange_200};
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 24px;
      }
    }
    .itemsContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .modalItem {
      position: relative;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: start;
      gap: 8px;
      padding: 8px;
      background-color: ${cores.orange_200};

      > img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }

      .modalItemText {
        h3 {
          font-weight: 900;
          font-size: 18px;
          line-height: 21.09px;
          color: ${cores.orange_100};
          margin-bottom: 16px;
        }
        span {
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: ${cores.orange_100};
        }
      }
      button {
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
        bottom: 8px;
        right: 8px;

        &:hover {
          filter: brightness(0.6);
        }
      }
    }
    .valorTotal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${cores.orange_200};
      font-weight: 700;
      font-size: 14px;
      line-height: 16.41px;
      margin-top: 40px;
      margin-bottom: 16px;
    }
  }
  .none {
    display: none;
  }
`

export const TextsContainer = styled.span`
  line-height: 21.09px;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
`

export const KartContainer = styled.button`
  background-color: transparent;
  color: ${cores.orange_100};
  border: none;
  line-height: 21.09px;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
