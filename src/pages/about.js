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
                <p>I'm Deon Liang, a software developer based in Canada.</p>
                <h1>Education</h1>
                <ul>
                    <li>
                       Bachelor of Science in Computer Science at <a className={aboutStyles.aboutLink} href="https://www.uvic.ca/">University of Victoria</a>
                    </li>
                    <li>
                        Class of 2018
                    </li>
                </ul>
                <h1>Travel Experience</h1>
                <p>Over 100 destinations worldwide, you can find out where I have visited <a className={aboutStyles.aboutLink} href={process.env.GATSBY_MAP_URL}>here</a></p>

                <h1>Contact</h1>
                <p>You can find out ways to contact me <Link className={aboutStyles.aboutLink} to="/contact">here</Link></p>
            </div>
        </Layout>

    )
}

export default AboutPage
