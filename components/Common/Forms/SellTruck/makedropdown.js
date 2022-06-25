import React from "react"
import { useState } from "react"
import Select from "react-select"
import { makelist } from "./make.js"

export default function MakeSelect({
  handleMakeChange,
  handleChange,
}) {
  const [result, ddlvalue] = useState(makelist[0].label)

  const handleState = (e) => {
    handleChange(e)
  }

  return (
    <div>
      <Select options={makelist}onChange={handleState} label="hello" />
    </div>
  )
}
