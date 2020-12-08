import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

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
            <Head title={props.data.contentfulPosts.title} url={`https://deonliang.com/blog/${props.data.contentfulPosts.slug}`}/>
            <h1>{props.data.contentfulPosts.title}</h1>
            <p>{props.data.contentfulPosts.publishedDate}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.contentfulPosts.content.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogTemplate
