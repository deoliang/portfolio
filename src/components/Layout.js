import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/styles.scss'
import { container, content } from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <div className={content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout