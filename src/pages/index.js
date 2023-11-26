import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { homeLink } from './index.module.scss'
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello, my name is Deon</h1>
      <h2>I am a software developer currently based in Canada.</h2>
      <h3>I am currently looking for full time opportunities.</h3>
      <h3>You can find out more about me <Link className={homeLink} to="/about">here</Link></h3>
      <h3>You can see what kind of projects I have done <Link className={homeLink} to="/projects">here</Link></h3>
    </Layout >
  )
}

export default IndexPage

export const Head = () => (
  <Seo title='Home' />
)