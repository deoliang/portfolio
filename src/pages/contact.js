import React from 'react'
import Layout from '../components/Layout'
import { contactLink } from './contact.module.scss'
import Seo from '../components/Seo'

const ContactPage = () => {
    return (
        <Layout>
            <div>
                <h1>Contact me</h1>
                <p>You can send me an general inquiry  <a className={contactLink} href={process.env.GATSBY_FORM_URL}>here</a></p>
            </div>
        </Layout>

    )
}

export default ContactPage

export const Head = ({ location }) => (
    <Seo title='Contact' pathName={location.pathname} />
)