import React from "react"
import styles from "../../css/about.module.css"
import Title from "../Title"
// import img from "../../images/about.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <div className={styles.about}>
      <Title title="O mnie" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about_me" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Witaj Ziomeczku!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            nesciunt ipsam praesentium!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            dolorem eius esse obcaecati? Quas voluptate voluptas sit, architecto
            aperiam deserunt.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
