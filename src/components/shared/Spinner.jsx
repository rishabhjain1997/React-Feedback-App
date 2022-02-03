import spinner from "../assets/Spinner.gif"

import React from "react"

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading.."
      style={{
        width: "100px",
        height: "auto",
        margin: "auto",
        display: "block",
      }}
    />
  )
}

export default Spinner
