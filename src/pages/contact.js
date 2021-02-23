import React from 'react'

import Layout from '../components/Layout'
import Head from '../components/Head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" url="https://deonliang.com/contact"/>
            <div>
                <h1>Contact me</h1>
                <p>You can send me an general inquiry  <a className={contactStyles.contactLink} href={process.env.GATSBY_FORM_URL}>here</a></p>
            </div>
        </Layout>

    )
}

export default ContactPage
