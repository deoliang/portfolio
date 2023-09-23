import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { projects, project, linksList, linkText } from './projects.module.scss'
import Seo from '../components/Seo'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulProjects(sort: {publishedDate: DESC}){
            edges {
                node {
                    description
                    githubUrl
                    demoUrl
                    title
                }   
            }
        }
    }  
  `)
    return (
        <Layout>
            <h1>Projects</h1>
            <ul className={projects}>
                {data.allContentfulProjects.edges.map((edge) => {
                    return (
                        <li key={edge.node.title} className={project}>
                            <h2>{edge.node.title}</h2>
                            <ul className={linksList}>
                                <li className={linkText}>
                                    <h4>
                                        <a href={edge.node.demoUrl}>
                                            Demo
                                        </a>
                                    </h4>
                                </li>
                                <li className={linkText}>
                                    <h4>
                                        <a href={edge.node.githubUrl}>
                                            Code
                                        </a>
                                    </h4>
                                </li>
                            </ul>
                            <p>{edge.node.description}</p>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}

export default ProjectsPage

export const Head = ({location})=>(
    <Seo title='Projects' pathName={location.pathname}/>
)