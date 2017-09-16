import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import render from '../../lib'
import Access from './shared/Access'

// Define our button, but with the use of props.theme this time
const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;

	/* Color the border and text with theme.main */
	color: ${props => props.theme.main};
	border: 2px solid ${props => props.theme.main};
`

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
}

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
}

const Body = ({ children, ...props }, { head }) =>
  <body {...props}>
    <Button>Normal</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
    {children}
  </body>


const StyledBody = styled(Body)`
	background: papayawhip;

	@media (max-width: 700px) {
		background: palevioletred;
	}
`

const StyledComponents = () =>
  <StyledBody><Access /></StyledBody>

export default () =>
  render(<StyledComponents />, {
    title: 'Styling AMP with StyledComponents',
    canonical: 'https://canonical.com',
    styleManager: 'styled-components',
  })
