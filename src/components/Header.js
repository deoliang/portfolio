import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {
    header,
    title,
    menuContainer,
    menuOff,
    menuOn,
    crossOn,
    crossOff,
    navResponsive,
    navList,
    navItem,
    activeNavItem,
} from './header.module.scss'
import { routesArray } from '../utils/routes'

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
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 640) {
                setOpen(false)
            }
        }
        window.addEventListener('resize', onResize);


        return () => {
            window.removeEventListener('resize', () => onResize);
        };
    }, []);


    const handleClick = () => {
        setOpen(!isOpen)
    }


    const renderedItems = routesArray.map((route) => {
        return (
            <li key={route.name}><Link className={navItem} activeClassName={activeNavItem} to={route.path}>{route.name}</Link></li>
        )
    })

    return (
        <header className={header}>

            <h1>
                <Link className={title} to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <div className={menuContainer} >
                <svg onClick={handleClick} className={isOpen ? menuOff : menuOn} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg onClick={handleClick} className={isOpen ? crossOn : crossOff} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div>
                <ul className={isOpen ? navResponsive : navList}>
                    {renderedItems}
                </ul>
            </div>
        </header>
    )
}

export default Header