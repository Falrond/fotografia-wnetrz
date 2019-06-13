import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <Hero>
      <Banner
        title="fotografia wnętrz"
        info="Fotografia nieruchomości, hoteli, restauracji, apartamentów i przestrzeni komercyjnych"
      >
        <Link to="/galleries" className="btn-white">
          zobacz więcej
        </Link>
      </Banner>
    </Hero>
    <About />
    <Services />
  </Layout>
)
