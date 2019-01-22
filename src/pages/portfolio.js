import React from 'react'
import { graphql } from 'gatsby'
import Portfolio from '../components/Portfolio'
import SocialIcons from '../components/SocialIcons'

const PortfolioPage = ({ data }) => (
  <Portfolio projects={data.site.siteMetadata.projects}>
    <SocialIcons />
  </Portfolio>
)

export const query = graphql`
  query Projects {
    site {
      siteMetadata {
        projects {
          name
          description
          id
          liveSite
          tags
        }
      }
    }
  }
`

export default PortfolioPage
