import React from "react"
import { useState } from "react"
import Select from "react-select"
import { WeightType} from "./Weighttype"

export default function WeightTypes({ handleWeightChange, currentState }) {
  const [result, ddlvalue] = useState(WeightType.label)

  const handleState = (e) => {
    handleWeightChange(e.label)
  }

  return (
    <div>
      <Select options={WeightType} onChange={handleState} label="hello" />
    </div>
  )
}