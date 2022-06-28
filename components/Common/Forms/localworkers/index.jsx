import React, { useState } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LocalWorkersListing } from "@store/local-store/local-action"

const Localworkers = ({ className }) => {
  const [formData, setFormData] = useState({
    job: "",
    name: "",
    location: "",
    contactno: null,
    title: "",
  })
  const dispatch = useDispatch()
  const Localworkers = useSelector((state) => {
    state.localworkers
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
  const [currentState, setCurrentState] = useState("Texas")
  const [currentCity, setCurrentCity] = useState("Alamo")
  const handleCurrentState = (state) => {
    setCurrentState(state)
    setCurrentCity("")
  }
  const handleCurrentCity = (city) => {
    setCurrentCity(city)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ formData })
    const payload = { ...formData, city: currentCity, state: currentState }
    dispatch(LocalWorkersListing(payload))
  }
  useEffect(() => {}, [Localworkers])

  const { job, name, contactno, title, location } = formData

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white ${className}`}
    >
      <span>States</span>
      <StatesSelect
        handleCurrentState={handleCurrentState}
        currentState={currentState}
      />
      <CitySelect
        handleCurrentCity={handleCurrentCity}
        currentCity={currentCity}
        currentState={currentState}
        disabled={!!currentState ? currentCity : currentState}
      />
      <TextInput
        name="job"
        id="job"
        value={job}
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
        name="contactno"
        id="contactno"
        value={contactno}
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

export default Localworkers
