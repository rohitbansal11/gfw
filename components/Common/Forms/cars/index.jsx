import React, { useState } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"

const SellCarsForm = ({ className }) => {
  const [formData, setFormData] = useState({
 
    state:"",
    city:"",
    make:"",
    year:null,
    model:"",
    miles:"",
    contact_no:null,
    price:"",
    title:"",
    photo:{}, 
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

  const {state,city, make, year, model, miles, contact_no,price, title,photo  } = formData

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
        placeholder="Select State"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="city"
        id="city"
        value={city}
        label="city"
        placeholder="Select City"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="make"
        id="make"
        value={make}
        label="Make"
        placeholder="Make"
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="year"
        id="year"
        value={year}
        label="Year"
        type="date"
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
        type="text"
        handleChange={handleChange}
      />
     <TextInput
        name="miles"
        id="miles"
        value={miles}
        label="Miles Driven"
        placeholder="Miles Driven"
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

      <TextInput
        name="price"
        id="price"
        value={price}
       label="Price"
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

export default SellCarsForm