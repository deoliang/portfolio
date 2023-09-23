import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { notFoundLink } from './notfound.module.scss'
import Seo from '../components/Seo'

const NotFound = () => {
    return (
        <Layout>
            <h1>404 Page not found</h1>
            <h3><Link className={notFoundLink} to="/">Head home</Link></h3>
        </Layout>
    )
}

export default NotFound

export const Head = () => (
    <Seo title='404' pathName='/404' />
)