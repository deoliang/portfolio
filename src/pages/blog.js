import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/Head'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulPosts(sort: {fields:publishedDate, order:DESC}) {
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
            <Head title="Blog" url="https://deonliang.com/blog"/>
            <div>
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulPosts.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}

                </ol>
            </div>
        </Layout>

    )
}

export default BlogPage
