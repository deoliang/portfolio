import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import photo from '../images/pf.jpg'
import { aboutLink, profile } from './about.module.scss'
import Seo from '../components/Seo'

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <img className={profile} src={photo} alt="deon" />
        <h1>About me</h1>
        <p>I'm Deon Liang, a software developer based in Canada.</p>
        <h1>Education</h1>
        <p>
          Bachelor of Science in Computer Science at <a className={aboutLink} href="https://www.uvic.ca/">University of Victoria</a>
        </p>
        <h1>Travel Experience</h1>
        <p>Over 100 destinations worldwide, you can find out where I have visited <a className={aboutLink} href={process.env.GATSBY_MAP_URL}>here</a></p>

        <h1>Contact</h1>
        <p>You can find out ways to contact me <Link className={aboutLink} to="/contact">here</Link></p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = ({ location }) => (
  <Seo title='About' pathName={location.pathname} />
)