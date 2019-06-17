import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import icons from "../constants/icons"
import PhoneButton from "../components/PhoneButton"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {icons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
        <PhoneButton />
      </div>
      <div className={styles.copyright}>
        Copyright &copy; Artur Mamos {new Date().getFullYear()}. Wszystkie prawa
        zastrzeżone.
      </div>
    </footer>
  )
}

export default Footer
