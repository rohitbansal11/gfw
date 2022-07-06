import React from "react"
import { useState } from "react"
import Select from "react-select"
import { type} from "./type"


export default function Types({ handleCurrentState, currentState,handleTypeChange }) {
  const [result, ddlvalue] = useState(type.label)
  const handleState = (e) => {
    handleTypeChange(e.label)

  }

  return (
    <div>
      <Select options={type} onChange={handleState} label="hello"  />
    </div>
  )
}
