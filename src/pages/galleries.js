import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import FluidHero from "../components/FluidHero"

const galleries = () => {
  return <Layout>dupa</Layout>
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
