import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, pathName = '' }) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                   title
                   siteUrl
                }
            }
        }
    `)

    return (
        <>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content="A tech portfolio and blog of Deon Liang" />
            <meta name="keywords" content="portfolio, blog, software, web development, gatsby" />
            <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${pathName}`} />
        </>
    )
}

export default Seo