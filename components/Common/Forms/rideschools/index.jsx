import React, { useState } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"

const RideSchools = ({ className }) => {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pickup: "",
    pickup_date_time: "",
    Schoolname: "",
    title:"",
    contact_no: null,
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

  const { state,city,pickup,pickup_date_time,Schoolname, title,contact_no } = formData

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white ${className}`}
    >

        <TextInput
        name="state"
        id="State"
        value={state}
        label=" States"
        placeholder="States"
        required={true}
        type="text"
        handleChange={handleChange}
      />


      <TextInput
        name="city"
        id="city"
        value={city}
        label="City"
        placeholder="City"
        required={true}
        type="text"
        handleChange={handleChange}
      />
            <TextInput
        name="pickup"
        id="pickup"
        value={pickup}
        label="Pickup"
        placeholder="Pickup"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="pickup_date_time"
        id="pickup_date_time"
        value={pickup_date_time}
        label="Pickup Date & time"
        placeholder="Pick-up"
        required={true}
        type="date"
        handleChange={handleChange}
      />
            <TextInput
        name="Schoolname"
        id="Schoolname"
        value={Schoolname}
        label="School name"
        placeholder="School name"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="title"
        id="title"
        value={title}
        label=" Ad Title"
        placeholder="Title"
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

      

      <button
        type="submit"
        className="text-xl font-medium py-2 mt-4 border-2 border-indigo-700 text-white bg-indigo-700 rounded-md drop-shadow-sm hover:bg-indigo-900"
      >
        Continue
      </button>
    </form>
  )
}

export default RideSchools