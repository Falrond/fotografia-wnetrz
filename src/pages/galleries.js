import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Sessions from "../components/Sessions/Sessions"

const galleries = () => {
  return (
    <Layout>
      <Sessions />
    </Layout>
  )
}

export default galleries

export const query = graphql`
  query {
    heroBcg: file(relativePath: { eq: "heroBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
