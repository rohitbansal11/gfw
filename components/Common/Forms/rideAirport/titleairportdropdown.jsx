import React from "react"
import { useState } from "react"
import Select from "react-select"
import { titleairport } from "./titleairport"

export default function TitleAirport({ handleTitleChange, currentState }) {
  const [result, ddlvalue] = useState(titleairport.label)

  const handleState = (e) => {
    handleTitleChange(e.label)
  }

  return (
    <div>
      <Select options={titleairport} onChange={handleState} label="hello" />
    </div>
  )
}
