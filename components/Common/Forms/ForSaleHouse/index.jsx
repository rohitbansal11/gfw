import React, { useState, useEffect } from "react"
import { TextInput } from "@components/Common"

import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { Previews, } from "../SellTruck/dropzone"
import { sellhouseListing } from "@store/sell-or-rent-store/sell-or-rent-action"
import { useDispatch, useSelector } from "react-redux"

const forSaleHouse = ({ className }) => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    year: null,
    rooms: "",
    state: "",
    contactno: null,
    image: {},
    area: null,
  })
  const dispatch = useDispatch()
  const sellhouse = useSelector((state) => {
    state.sellhouse
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
  useEffect(() => {}, [sellhouse])
  const handleFileChange = (state) => {
    console.log(state)
    setFormData((prevState) => {
      return {
        ...prevState,
        image: state,
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let payload = {
      ...formData,
      city: currentCity,
      state: currentState,
      image: "https://image.jpg", //@todo remove this and handle image upload
    }
    dispatch(sellhouseListing(payload))
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

  const { contactno, rooms, title, area } = formData

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
        disabled={!!currentState}
      />
      <TextInput
        name="rooms"
        id="rooms"
        value={rooms}
        label=" No Of Rooms"
        placeholder="No of Rooms"
        required={true}
        type="number"
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
        name="price"
        id="price"
        label="Price"
        type="number"
        placeholder="Price"
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="area"
        id="area"
        label="area"
        type="number"
        placeholder="Area in square feet"
        required={true}
        value={area}
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

export default forSaleHouse
