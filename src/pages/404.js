import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="uups.. coś poszło nie tak...">
          <AniLink fade to="/" className="btn-white">
            wróć do strony głównej
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
