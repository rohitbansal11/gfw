import React from "react"
import { useState } from "react"
import Select from "react-select"
import { titles } from "./titlelist"


export default function TitleAirport({ handleCurrentState, currentState }) {
  const [result, ddlvalue] = useState(titles.label)

  const handleState = (e) => {
    handleCurrentState(e.label)
  }

  return (
    <div>
      <Select options={titles} onChange={handleState} label="hello"  />
    </div>
  )
}
