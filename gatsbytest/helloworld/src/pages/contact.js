import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div>
      <Link to="/" style={{ color: `teal` }}>
        Home
      </Link>
      <Header headerText="Contact" color={"white"} />
      <p>Send us a message!</p>
    </div>
  )
}
