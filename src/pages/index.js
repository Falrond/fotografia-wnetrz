import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// import Hero from "../components/Hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FluidHero from "../components/FluidHero"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <FluidHero home="true" img={data.heroBcg.childImageSharp.fluid}>
      <Banner
        title="fotografia wnętrz"
        info="Fotografia nieruchomości, hoteli, restauracji, apartamentów i przestrzeni komercyjnych"
      >
        <AniLink fade to="/galleries" className="btn-white">
          zobacz więcej
        </AniLink>
      </Banner>
    </FluidHero>
    <About />
    <Services />
  </Layout>
)

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
