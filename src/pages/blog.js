import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { posts, post } from './blog.module.scss'
import Seo from '../components/Seo'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query{
      allContentfulPosts(sort: {publishedDate: DESC}){
          edges {
              node {
                  title
                  slug
                  publishedDate(
                    formatString: "MMMM Do, YYYY"
                  )
              }   
          }
      }
  }  
`)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={posts}>
        {data.allContentfulPosts.edges.map((edge) => {
          return (
            <li key={edge.node.slug} className={post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

export const Head = ({ location }) => (
  <Seo title='Blog' pathName={location.pathname} />
)