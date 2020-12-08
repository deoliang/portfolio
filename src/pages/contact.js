import React from 'react'

import Layout from '../components/Layout'
import Head from '../components/Head'


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" url="https://deonliang.com/contact"/>
            <div>
                <h1>Contact me</h1>
                <p>I can be reached at  <a href="https://github.com/deoliang">github</a></p>
            </div>
        </Layout>

    )
}

export default ContactPage
