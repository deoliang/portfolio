import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { footer } from './footer.module.scss'
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footer}>
      <p>
        Created by {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer