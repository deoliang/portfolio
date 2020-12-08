import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'



const Head = ({title, url}) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    return (
        <Helmet>
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content="A tech portfolio and blog of Deon Liang"/>
            <meta name="keywords" content="portfolio, blog, software, web development, gatsby"/>
            <link rel="canonical" href={url}/>
        </Helmet>
    )
}

export default Head
