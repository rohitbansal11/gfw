import React from "react"
import { useState } from "react"
import Select from "react-select"
import { carmakers } from "./carsdropdownlist"


export default function CarMakers({ handleCurrentState, currentState }) {
  const [result, ddlvalue] = useState(carmakers[0].label)

  const handleState = (e) => {
    handleCurrentState(e.label)
  }

  return (
    <div>
      <Select options={carmakers} onChange={handleState} label="hello"  />
    </div>
  )
}
