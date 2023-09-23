import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const query = graphql`
    query($slug: String!) {
        contentfulPosts(slug: {eq: $slug}) {
            title
            publishedDate(formatString:"MMMM Do, YYYY")
            content {
              childMarkdownRemark {
                html
              }
            }
            slug
        }
    }
`

const BlogTemplate = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulPosts.title}</h1>
      <p>{props.data.contentfulPosts.publishedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.contentfulPosts.content.childMarkdownRemark.html }}></div>
    </Layout>
  )
}

export default BlogTemplate