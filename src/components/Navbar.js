import React, { useState } from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaAlignJustify } from "react-icons/fa"
import PhoneButton from "../components/PhoneButton"
import links from "../constants/links"
import icons from "../constants/icons"

const Navbar = () => {
  const [isSpread, setNav] = useState(false)
  const navToggle = () => {
    setNav(isSpread => !isSpread)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>Artur Mamos</div>
          <button type="button" className={styles.menuBtn} onClick={navToggle}>
            <FaAlignJustify className={styles.menuIcon} />
          </button>
        </div>
        <ul
          className={
            isSpread
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
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
      </div>
    </nav>
  )
}

export default Navbar
