import type { GatsbyConfig } from "gatsby"

if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Palguno Wicaksono`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-notion-api',
      options: {
        token: process.env.NOTION_SECRET,
        databaseId: process.env.NOTION_DATABASE_ID,
        propsToFrontmatter: false,
        lowerTitleLevel: true,
      },
    },
  ],
}

export default config
