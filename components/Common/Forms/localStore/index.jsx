import React, { useState, useEffect } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { useDispatch, useSelector } from "react-redux"
import { LocalStoreListing } from "@store/local-store/local-action"

const Localstore = ({ className }) => {
  const [formData, setFormData] = useState({
    job: "",
    nameofstore: "",
    location: "",
    contactno: null,
    title: "",
  })
  const dispatch = useDispatch()
  const localstore = useSelector((state) => {
    state.localstore
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
    const payload = { ...formData,
       city: currentCity,
      state: currentState }
    dispatch(LocalStoreListing(payload))
    console.log("hello " , {formData})
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

  useEffect(() => {}, [localstore])

  const { job, nameofstore, location, contactno, title } = formData

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white ${className}`}
    >
      <span>State</span>
      <StatesSelect
        handleCurrentState={handleCurrentState}
        currentState={currentState}
      />
      <span className="my-1">City</span>
      <CitySelect
        handleCurrentCity={handleCurrentCity}
        currentCity={currentCity}
        currentState={currentState}
        disabled={!currentState ? true : false}
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
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact Number"
        placeholder="eg-999999"
        type="number"
        min={"123456"}
        max={"123456789123456"}
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

export default Localstore
