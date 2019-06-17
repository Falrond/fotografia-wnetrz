import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import FluidHero from "../components/FluidHero"
import Contact from "../components/Contact/Contact"

const contact = ({ data }) => {
  return (
    <Layout>
      <FluidHero home="true" img={data.connect.childImageSharp.fluid}>
        <Contact />
      </FluidHero>
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    connect: file(relativePath: { eq: "connect.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
