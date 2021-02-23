import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import projectStyles from './projects.module.scss'

const ProjectPage = () => {
    return (
        <Layout>
            <Head title="Projects" url="https://deonliang.com/projects" />
            <div>
                <h1>Projects</h1>
                <ul className={projectStyles.projects}>
                <li className={projectStyles.project}>
                        <h2>Portfolio</h2>
                        <ul className={projectStyles.linksList}>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://deonliang.com">
                                        Demo
                                    </a>
                                </h4>

                            </li>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://github.com/deoliang/portfolio">
                                        Code
                                    </a>
                                </h4>
                            </li>
                        </ul>
                        <p>A portfolio built with gatsby.js and scss showcasing techonolgies I've worked with and projects I've built</p>
                    </li>
                    <li className={projectStyles.project}>
                        <h2>Covid-19 Tracker</h2>
                        <ul className={projectStyles.linksList}>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://corona-track.vercel.app/">
                                        Demo
                                    </a>
                                </h4>

                            </li>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://github.com/deoliang/corona_track">
                                        Code
                                    </a>
                                </h4>
                            </li>
                        </ul>
                        <p>An app for tracking and visualizing data of the covid-19 pandemic, built with react, scss and material-ui </p>
                    </li>
                    <li className={projectStyles.project}>
                        <h2>Quote App</h2>
                        <ul className={projectStyles.linksList}>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://quote-app.vercel.app/">
                                        Demo
                                    </a>
                                </h4>

                            </li>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://github.com/deoliang/quote-app">
                                        Code
                                    </a>
                                </h4>
                            </li>
                        </ul>
                        <p>A react quote app using react hooks and serving quotes from goodreads.com</p>
                    </li>
                    <li className={projectStyles.project}>
                        <h2>PomoTimer React</h2>
                        <ul className={projectStyles.linksList}>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://pomo-timer-react.vercel.app">
                                        Demo
                                    </a>
                                </h4>

                            </li>
                            <li className={projectStyles.linkText}>
                                <h4>
                                    <a href="https://github.com/deoliang/PomoTimer-React">
                                        Code
                                    </a>
                                </h4>
                            </li>
                        </ul>
                        <p>A react timer with redux state management for the pomodoro techinique</p>
                    </li>
                </ul>
            </div>
        </Layout>

    )
}

export default ProjectPage
