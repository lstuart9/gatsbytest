import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import "../styles/index.scss"

export default function Home() {
  return (
    <div
      className={"textbox"} //style={{ color: "lightblue" }}
    >
      <Header headerText="This is props or whatever" color={"red"} />
      <Link to="/contact/"> Contact </Link>
      <p>this code is absolutety useless</p>
      <Header headerText="Reused code look how cool" color={"white"} />
      <img src="https://source.unsplash.com/random/400x200" alt="random" />
    </div>
  )
}
