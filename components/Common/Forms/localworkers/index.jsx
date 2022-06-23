import React, { useState } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"

const Localworkers = ({ className }) => {
  const [formData, setFormData] = useState({
    state:"",
    city:"",
    jobpost: "",
    name: "",
    location: "",
    contact_no: null,
    title: "",
    

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

  const {state,city ,jobpost,name, contact_no,title,location } = formData

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
        name="jobpost"
        id="jobpost"
        value={jobpost}
        label="Job Post"
        placeholder="Job Post"
        required={true}
        type="text"
        handleChange={handleChange}
      />
             <TextInput
        name="name"
        id="name"
        value={name}
        label="Name"
        placeholder="Name"
        required={true}
        handleChange={handleChange}
      />
      
      

                  
     

      <TextInput
        name="location"
        id="location"
        value={location}
        label="location"
        placeholder="location"
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
        name="title"
        id="title"
        value={title}
        label="Ad Title"
        placeholder="Ad Title"
        required={true}
        type="text"
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

export default  Localworkers
