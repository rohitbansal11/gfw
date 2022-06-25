import React from "react"
import { useState } from "react"
import Select from "react-select"
import { carmakers } from "./carsdropdownlist"

export default function CarMakers({ handleMakeChange, currentmake }) {
  const [result, ddlvalue] = useState(carmakers[0].label)
  const handlemake = (e) => {
  handleMakeChange(e.label)
  }

  return (
    <div>
      <Select options={carmakers} onChange={handlemake} label="hello"  />
    </div>
  )
}
