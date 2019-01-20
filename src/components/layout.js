import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import PageContainer from './PageContainer'

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1rem;
    margin: 0;
  }
`
const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <PageContainer>{children}</PageContainer>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
