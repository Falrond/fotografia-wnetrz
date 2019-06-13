import React, { useState } from "react"
import { FaPhone } from "react-icons/fa"
import styles from "../css/phoneButton.module.css"

const PhoneButton = () => {
  const [isSpread, setNav] = useState(false)
  const navToggle = () => {
    setNav(isSpread => !isSpread)
    console.log("dupa")
  }
  return (
    <button className={styles.phoneButton}>
      <FaPhone onClick={navToggle} />
    </button>
  )
}

export default PhoneButton
