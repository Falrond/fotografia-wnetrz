import React from "react"
import Image from "gatsby-image"
import styles from "../../css/session.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Session = ({ session }) => {
  const { name, date, images, slug } = session
  let mainImage = images[0].fluid
  return (
    <article className={styles.session}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} />
        <AniLink fade className={styles.link} to={`/galleries/${slug}`}>
          rozwiń
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  )
}

export default Session
