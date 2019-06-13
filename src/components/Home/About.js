import React from "react"
import styles from "../../css/about.module.css"
import Title from "../Title"
import img from "../../images/about.jpg"

const About = () => {
  return (
    <div className={styles.about}>
      <Title title="O mnie" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="aboutme" />
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
