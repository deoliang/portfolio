import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import photo from './pf.jpg'
import Head from '../components/Head'
import aboutStyles from './about.module.scss'
const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" url="https://deonliang.com/about"/>
            <div>
                <img className={aboutStyles.profile}src={photo} alt="deon"/>
                <h1>About me</h1>
                <p>I'm Deon, a developer based in Canada</p>
                <Link className={aboutStyles.aboutLink} to="/contact">Contact me</Link>
            </div>
        </Layout>

    )
}

export default AboutPage
