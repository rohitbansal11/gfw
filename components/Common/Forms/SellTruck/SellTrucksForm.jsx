import React, { useState, useEffect, useCallback } from "react"
import { TextInput } from "@components/Common"
import { Previews } from "./Dropzone"
import StatesSelect from "./statesdropdown"
import CitySelect from "./citiesdropdown"
import MakeSelect from "./makedropdown"
import { useDispatch, useSelector } from "react-redux"
import { addSellTruckListing } from "../../../../store/sell-truck-store/sell-truck-action"
const SellTrucks = ({ className }) => {
  const [formData, setFormData] = useState({
    make: "",
    year: "",
    Modal: "",
    Miles: "",
    title: "",
    contact: null,
    file: [],
  })
  const dispatch = useDispatch()
  const sellTruckState = useSelector((state) => state.sellTruck)

  console.log({sellTruckState})
  const [currentState, setCurrentState] = useState("Texas")
  const [currentCity, setCurrentCity] = useState("Alamo")
  
  const handleMakeChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        make: state,
      }
    })
  }

  const handleFileChange = (state) => {
    console.log(state)
    setFormData((prevState) => {
      return {
        ...prevState,
        file: state,
      }
    })
  }
  const handleCurrentState = useCallback(
    (state) => {
      setCurrentState(state)
      setCurrentCity("")
    },
    [currentState]
  )
  const handleCurrentCity = useCallback(
    (city) => {
      console.log({ city })
      setCurrentCity(city)
    },
    [currentCity]
  )
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
    const payload = { ...formData, currentCity, currentState }
    console.log({ payload, formData })
    dispatch(addSellTruckListing(payload))
  }
  useEffect(() => {}, [sellTruckState])

  const { year, Modal, Miles, title, contact } = formData

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
        disabled={!!currentState ? false : true}
      />
      <span>Make</span>
      <MakeSelect
        handleCurrentState={handleCurrentState}
        currentState={currentState}
        handleChange={handleMakeChange}
      />
      <TextInput
        name="year"
        id="year"
        value={year}
        label="Year"
        placeholder="Year"
        required={true}
        type="date"
        handleChange={handleChange}
      />
      <TextInput
        name="Modal"
        id="Modal"
        value={Modal}
        label="Model"
        placeholder="Model"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="Miles"
        id="Miles"
        value={Miles}
        label="Miles"
        placeholder="Miles"
        type="text"
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="title"
        id="title"
        value={title}
        label="Ad title"
        placeholder="Ad Title"
        type="text"
        required={true}
        handleChange={handleChange}
      />{" "}
      <TextInput
        name="contact"
        id="contact"
        value={contact}
        label="Contact No"
        placeholder="Contact No"
        type="number"
        required={true}
        handleChange={handleChange}
      />
      <span>Add Images</span>
      <Previews handleFileChange={handleFileChange} />
      <button
        type="submit"
        className="text-xl font-medium py-2 mt-4 border-2 border-indigo-700 text-white bg-indigo-700 rounded-md drop-shadow-sm hover:bg-indigo-900"
      >
        Continue
      </button>
    </form>
  )
}

export default SellTrucks
