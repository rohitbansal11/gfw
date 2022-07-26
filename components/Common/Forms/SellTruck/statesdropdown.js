import React from "react"
import { useState } from "react"
import Select from "react-select"
import { Statename } from "./state.js"

export default function StatesSelect({
  handleCurrentState,
  currentState,
  label,
}) {
  const [result, ddlvalue] = useState(Statename[0].label)

  const handleState = (e) => {
    handleCurrentState(e.label)
  }

  return (
    <div>
      <Select
        label={label ? "State" : null}
        placeholder="Select State"
        options={Statename}
        onChange={handleState}
      />
    </div>
  )
}
