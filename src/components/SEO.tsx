import React from 'react'
import Helmet from 'react-helmet'

import {siteConfig} from '../utils/Config'

interface Props {
  title: string,
  description: string,
  postNode?: any,
  postPath?: any,
  postSEO?: any,
  customDescription?: any
}


const SEO: React.FC<Props> = (props: Props) => {
    let title
    let description
    let image = siteConfig.siteLogo
    let postURL

    if (props.postSEO) {
        const postMeta = props.postNode.frontmatter
        title = postMeta.title
        description = props.postNode.excerpt
    
        if (postMeta.thumbnail) {
          image = postMeta.thumbnail.childImageSharp.fixed.src
        }
    
        postURL = `${siteConfig.siteUrl}${props.postPath}`
      } else {
        title = siteConfig.siteTitle
        description = props.customDescription || siteConfig.description
      }
      return (
        <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:url" content={props.postSEO ? postURL : siteConfig.siteUrl} />
      {props.postSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
      )
}
export default SEO