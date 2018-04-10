import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import Header from '../components/Header'
import '../styles/index.styl'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />
    <Header title={data.site.siteMetadata.title} />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
