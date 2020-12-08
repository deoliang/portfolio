import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import notFoundStyles from './notfound.module.scss'
const NotFound = () => {
    return (
       <Layout>
           <Head title="404" url="https://deonliang.com/404"/>
           <h1>404 Page not found</h1>
           <h3><Link className={notFoundStyles.notFoundLink} to="/">Head home</Link></h3>
       </Layout>
    )
}

export default NotFound
