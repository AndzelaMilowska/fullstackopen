import React from "react";
import Part from './Part'

export default function Content(props) {
    const {parts, exercisesList} = props
  return (
    <div>
      <Part part={parts[0]} exercises={exercisesList[0]} />
      <Part part={parts[1]} exercises={exercisesList[1]} />
      <Part part={parts[2]} exercises={exercisesList[2]} />
    </div>
  )
}
