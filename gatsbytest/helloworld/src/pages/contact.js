import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import * as styles from "./index.module.scss"

export default function Contact() {
  return (
    <div>
      <div className={styles.topnav}>
        <img
          src="https://source.unsplash.com/random/50x50"
          alt="random"
          align={"right"}
        />
        <a className="active" href="/">
          Home
        </a>
        <a href="/contact">Contact</a>
        <a href="/">Blah</a>
        <a href="/">Blah</a>
      </div>
      <div className={styles.text}>
        <Link to="/" style={{ color: `teal` }}>
          Home
        </Link>
        <Header headerText="Contact" color={"white"} />
        <p>Send us a message!</p>
      </div>
    </div>
  )
}
