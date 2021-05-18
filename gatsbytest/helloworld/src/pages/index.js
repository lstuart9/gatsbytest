import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: "lightblue" }}>
      <Header headerText="This is props or whatever" />
      <Link to="/contact/"> Contact </Link>
      <p>Im so sexy alallahaha</p>
      <Header headerText="Reused code look how cool" />
      <img src="https://source.unsplash.com/random/400x200" alt="random" />
    </div>
  )
}
