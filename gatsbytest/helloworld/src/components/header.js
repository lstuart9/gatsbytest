import React from "react"
import head from "../styles/header.scss"
export default function Header(props) {
  return (
    <h1 className={head} style={{ color: props.color }}>
      {" "}
      {props.headerText}{" "}
    </h1>
  )
}
