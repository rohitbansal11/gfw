import React from "react"
import { useState } from "react"
import Select from "react-select"
import { titles } from "./titlelist"


export default function TitleAirport({ handleCurrentState, currentState,handleTitleChange }) {
  const [result, ddlvalue] = useState(titles.label)
  const handleState = (e) => {
    handleTitleChange(e.label)

  }

  return (
    <div>
      <Select options={titles} onChange={handleState} label="hello"  />
    </div>
  )
}
