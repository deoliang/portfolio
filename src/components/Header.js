import React, { useState, useEffect} from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import headerStyles from './header.module.scss'


const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }   
        }
    `)
    const isBigScreen = useMediaQuery({ query: '(min-width: 640px)' })
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!isOpen)
    }

    useEffect(()=>{
            setOpen(false) 
    },[isBigScreen])

    return (
        <header className={headerStyles.header}>
           
            <h1>
                <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <div class={headerStyles.menuContainer} >
                <svg onClick={handleClick} className={isOpen ? headerStyles.menuOff:headerStyles.menuOn}   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg onClick={handleClick} className={isOpen ? headerStyles.crossOn : headerStyles.crossOff}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>            
            </div>
            <div className={headerStyles.navContainer}>
                <ul className={isOpen ? headerStyles.navResponsive : headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> </li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
