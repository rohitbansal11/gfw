import React from "react"
import { useState } from "react"
import { Select } from "@mantine/core"
// import Select from "react-select"
import citiesData from "./city"
export default function CitySelect({
  handleCurrentCity,
  currentCity,
  currentState,
  disabled,
}) {
  const cities = citiesData
    .map((city) => {
      if (city.state === currentState) {
        return {
          value: city.city,
          label: city.city,
        }
      }
    })
    .filter((city) => city !== undefined)
  const handleCity = (e) => {
    handleCurrentCity(e.label)
  }
  console.log({ cities })
  return (
    <div>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={cities}
        disabled={disabled}
      />
    </div>
  )
}
