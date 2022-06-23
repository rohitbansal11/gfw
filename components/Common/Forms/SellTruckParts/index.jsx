import React, { useState } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"

const SellTruckPartsForm = ({ className }) => {
  const [formData, setFormData] = useState({
    part: "",
    price: null,
    make: "",
    year: null,
    model: "",
    title: "",
    contact_no: null,
    photo: {},
  })
 
  const handleChange = (e) => {
    let value = e.target.value
    if (e.target.name === "miles") {
      value = parseInt(value)
    }
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ formData })
  }

  const { state,city,part,make,year,model,price,title,contact_no,photo } = formData

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white ${className}`}
    >
      <TextInput
        name="state"
        id="state"
        value={state}
        label="State"
        placeholder="State"
        required={true}
        handleChange={handleChange}
      />
            <TextInput
        name="city"
        id="city"
        value={city}
        label="City"
        placeholder="City"
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="part"
        id="part"
        value={part}
        label="Part"
        placeholder="Part"
        required={true}
        handleChange={handleChange}
      />
            <TextInput
        name="make"
        id="make"
        value={make}
        label="Make"
        placeholder="choose Make"
        required={true}
        handleChange={handleChange}
      />
                  <TextInput
        name="year"
        id="year"
        value={year}
        type="date"
        label="Year"
        placeholder="Year"
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="model"
        id="model"
        value={model}
        label="Model"
        placeholder="Model"
        required={true}
        handleChange={handleChange}
      />

            <TextInput
        name="price"
        id="price"
        value={price}
        label="Price"
        placeholder="Price"
        required={true}
        type="number"
        handleChange={handleChange}
      />
            <TextInput
        name="title"
        id="title"
        value={title}
        label="Ad Title"
        placeholder="Ad Title"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      
      <TextInput
        name="contact_no"
        id="contact_no"
        value={contact_no}
        label="Contact Number"
        placeholder="Contact Number"
        type="number"
        required={true}
        handleChange={handleChange}
      />


      <DropDown/>
      <button
        type="submit"
        className="text-xl font-medium py-2 mt-4 border-2 border-indigo-700 text-white bg-indigo-700 rounded-md drop-shadow-sm hover:bg-indigo-900"
      >
        Continue
      </button>
    </form>
  )
}

export default SellTruckPartsForm