import React, { useState } from "react"
import { TextInput } from "@components/Common"

const Localstore = ({ className }) => {
  const [formData, setFormData] = useState({
    jobpost: "",
    nameofstore: "",
    location: "",
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

  const { jobpost,nameofstore,contact_no,location,title } = formData

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white ${className}`}
    >
         <TextInput
        name="title"
        id="title"
        value={title}
        label="title"
        placeholder="title"
        required={true}
        type="text"
        handleChange={handleChange}
      />
        <TextInput
        name="job post"
        id="job post"
        value={jobpost}
        label="Job Post"
        placeholder="Job Post"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="nameofstore"
        id="nameofstore"
        value={nameofstore}
        label="name of store"
        placeholder="name of store"
        required={true}
        handleChange={handleChange}
      />

      <TextInput
        name="location"
        id="location"
        value={location}
        label="Location"
        placeholder="Location"
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

export default  Localstore
