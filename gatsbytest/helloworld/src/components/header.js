import React from "react"
import * as styles from "./header.module.scss"
export default function Header(props) {
  return (
    <h1 className={styles.head} style={{ color: props.color }}>
      {" "}
      {props.headerText}{" "}
    </h1>
  )
}
