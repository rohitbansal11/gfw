import React, { useEffect } from "react"
import { useState } from "react"
import { Select } from "@mantine/core"
// import Select from "react-select"
import citiesData from "./city"
export default function CitySelect({
  handleCurrentCity,
  currentCity,
  currentState,
  disabled,
  label,
  className,
}) {

  const [citesAll , setCitiesAll]=useState([])
useEffect(()=>{
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
    setCitiesAll(cities)
},[currentState])

    const handleCity = (city) => {
      handleCurrentCity(city)
    }
    
  return (
    <div>
      <Select
        label={label ? "City" : null}
        placeholder="Select City"
        data={citesAll}
        value={currentCity}
        disabled={disabled}
        required
        onChange={handleCity}
        className={` ${className}`}
      />
    </div>
  )
}
