import { createGlobalStyle } from 'styled-components'

export const cores = {
  orange_100: '#E66767',
  orange_200: '#FFEBD9',
  orange_300: '#FFF8F2',
  white_100: '#FFFFFF',
  black_100: '#4B4B4B',

  branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.orange_300};
    color: ${cores.orange_100};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
