import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import Header from '../components/Header'
import '../styles/index.styl'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            "I am Andrew Usher. I'm a front-end developer focused on crafting clean, friendly, and beautiful user experiences"
        },
        { name: 'keywords', content: 'andrew usher, andrew usher developer, andrew usher web developer' }
      ]}
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
