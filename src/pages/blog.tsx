import React, {useMemo} from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {siteConfig} from '../utils/Config'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Posts from '../components/Post'
import notion from '../utils/Notion'

export interface Props {
  data: Queries.BlogQuery
}


const Index = (props: Props) => {
  
  const articles = useMemo(()=> notion(props.data.allNotion.nodes),[props.data.allNotion.nodes])
  console.log(articles.slice(0,5))
  return(
    <div>
      <Helmet title={siteConfig.siteTitle} />
      <SEO title="Palguno Wicaksono" description="Palguno Wicaksono" />
      <h1 className='mt-10'>Tulisan Terbaru</h1>
      <div className="mb-6">
        <Posts data={articles.slice(0,5)} showYears={true}/>
      </div>
    </div>
  )
}

export default Index

Index.Layout = Layout 

export const query  = graphql`
  query Blog {
    allNotion(filter: {properties: {Published: {value: {}}}}) {
    nodes {
      properties {
        Created {
          value {
            start(locale: "id-ID", formatString: "DD-MM-YYYY")
          }
        }
        Author {
          value {
            name
          }
        }
        URL {
          value
        }
      }
      updatedAt(formatString: "DD-MM-YYYY", locale: "id-ID")
      id
      title
    }
  }
  }
`