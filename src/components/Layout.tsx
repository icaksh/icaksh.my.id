import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import Navigation from './Navigation'
import Footer from './Footer'

interface Props {
    children?: React.ReactNode,
}


const Layout: React.FC<Props> = ({children}) => {
    const [theme, setTheme] = useState('light')
    const updateTheme = () => {
        const newTheme = theme === 'light' ? 'light' : 'dark'
        window.localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }
    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    return (
        <div className="container-md mx-auto px-12 lg:px-0 lg:max-w-3xl dark:text-white">
            <Helmet></Helmet>
            <div id="layout">
                <Navigation onUpdateTheme={updateTheme} theme={theme}></Navigation>
                <main>
                    {children}
                </main>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;
