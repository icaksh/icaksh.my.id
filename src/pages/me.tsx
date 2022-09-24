import React, {useMemo} from 'react'
import { Helmet } from 'react-helmet'
import {siteConfig} from '../utils/Config'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const About = () => (
    <div>
      <Helmet title={siteConfig.siteTitle} />
      <SEO title="Palguno Wicaksono" description="Palguno Wicaksono" />
      <h1 className='mt-10'>Tentang Palguno Wicaksono</h1>
      <p className='my-2 mb-10'>Namaku Palguno Wicaksono, <i>username</i>-ku icaksh</p>
    </div>
)

export default About

About.Layout = Layout 