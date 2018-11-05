import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  p {
    font-size: ${({ fontSize }) => (fontSize || 1)}rem;
    font-family: monospace;
  }
`

export default GlobalStyle
