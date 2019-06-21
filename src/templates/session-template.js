import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import styled from "styled-components"

// const StyledImg = styled(Img)`
//   picture {
//     width: auto;
//   }
// `

const SessionTemplate = ({ data }) => {
  const {
    name,
    description: { description },
    images,
  } = data.session

  return (
    <Layout>
      <section className={styles.template}>
        <Title title={name} />
        <div className={styles.center}>
          <p className={styles.info}>{description}</p>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (
                <Img key={index} fluid={item.fluid} className={styles.image} />
                // <h3>dupa</h3>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    session: contentfulSession(slug: { eq: $slug }) {
      name
      description {
        description
      }
      images {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default SessionTemplate
