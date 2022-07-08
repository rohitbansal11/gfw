import React, { useState, useEffect } from "react"
import { NumberInput, TextInput } from "@components/Common"

import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { Previews, } from "../SellTruck/dropzone"
import { sellhouseListing } from "@store/sell-or-rent-store/sell-or-rent-action"
import { useDispatch, useSelector } from "react-redux"

const RentHouse = ({ className }) => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    year: null,
    rooms: "",
    price: "",
    state: "",
    contactno: null,
    image: {},
    area: null,
  })


  
  
  const dispatch = useDispatch()
  const sellhouse = useSelector((state) => {
    state.sellhouse
  })
  
  const [currentState, setCurrentState] = useState(false)

  const [currentCity, setCurrentCity] = useState("Alamo")

  const handleChange = (e) => {
    let value = e.target.value
    if (e.target.name === "miles") {
      value = parseInt(value)
    }
    setFormData((prevState) => {
      return {
        ...prevState,[e.target.name]: value,
      }
    })
    console.log(e.target.value)
  }
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
    // console.log("ss" , { formData})
  }
  
  
  const handleCurrentState = (state) => {
    setCurrentState(state)
    setCurrentCity("")
    // console.log("hhhh" , {state :state})

  }
  const handleCurrentCity = (city) => {
    setCurrentCity(city)
    console.log(city  )
  }

  const { contactno, rooms,price, image,title, area } = formData
  useEffect(() => {}, [sellhouse])
  
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
       <span>City</span>
      <CitySelect
        handleCurrentCity={handleCurrentCity}
        currentCity={currentCity}
        currentState={currentState}
        disabled={!currentState ? true : false}
      />
      <NumberInput
        name="rooms"
        id="rooms"
        value={rooms}
        maxLength='3'
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
        maxLength='40'
        label=" Ad Title"
        placeholder="Title"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <NumberInput
        name="price"
        id="price"
        label="Price"
        value={price}
        maxLength='10'
        type="number"
        placeholder="Price"
        required={true}
        handleChange={handleChange}
      />
      <NumberInput
        name="area"
        id="area"
        label="area"
        maxLength='10'
        type="number"
        placeholder="Area in square feet"
        required={true}
        value={area}
        handleChange={handleChange}
      />

      <NumberInput
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact Number"
        placeholder="Contact Number"
        type="number"
        maxLength='10'
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="image"
        id="image"  
        label="image"
        placeholder="image"
        type="file"
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

export default RentHouse



