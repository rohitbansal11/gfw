import React from "react"
import { useState } from "react"
import Select from "react-select"
import { makelist } from "./make.js"

export default function MakeSelect({
  handleCurrentState,
  currentState,
  handleChange,
}) {
  const [result, ddlvalue] = useState(makelist[0].label)

  const handleState = (e) => {
    handleCurrentState(e.label)
    handleChange(e.label)
  }

  return (
    <div>
      <Select options={makelist} onChange={handleState} label="hello" />
    </div>
  )
}
