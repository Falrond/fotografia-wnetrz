import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Kontakt" />
      <div className={styles.center}>
        <form className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="imię"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="7"
              className={styles.formControl}
              placeholder="wiadomość..."
            />
          </div>
          <div>
            <input type="submit" value="wyślij" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
