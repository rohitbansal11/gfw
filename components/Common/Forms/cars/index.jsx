import React, { useState, useEffect } from "react"
import { NumberInput, TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import CarMakers from "./carsmakedropdown"
import { useDispatch, useSelector } from "react-redux"
import { carListing } from "@store/cars-store/car-action"

const SellCarsForm = ({ className }) => {
  const [formData, setFormData] = useState({
    make: "",
    year: null,
    model: "",
    miles: "",
    contactno: null,
    price: "",
    title: "",
    image: [],
  })
  const dispatch = useDispatch()
  const carslist = useSelector((state) => {
    state.carlist
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
  const handleMakeChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        make: state,
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = { ...formData, city: currentCity, state: currentState }
    dispatch(carListing(payload))
    // console.log("pp" , {formData})
  }

  const [currentState, setCurrentState] = useState(false)
  const [currentCity, setCurrentCity] = useState("Alamo")
  const handleCurrentState = (state) => {
    setCurrentState(state)
    setCurrentCity("")
  }

  const handleCurrentCity = (city) => {
    setCurrentCity(city)
  }
  useEffect(() => {}, [carslist])
  const { year, model, miles, contactno, price, title, image } = formData
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
        disabled={!!currentState ? false : true}
      />
      <span>Make</span>
      <CarMakers
        handleMakeChange={handleMakeChange}
        currentState={currentState}
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
        maxLength='20'
        value={model}
        label="Model"
        placeholder="Model"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <NumberInput
        name="miles"
        id="miles"
        value={miles}
        label="Miles Driven"
        maxLength='10'
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
        maxLength='40'
        placeholder="Ad Title"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <NumberInput
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact Number"
        placeholder="eg-999999"
        type="number"
        maxLength='10'

        required={true}
        handleChange={handleChange}
      />

      <NumberInput
        name="price"
        id="price"
        value={price}
        maxLength='10'
        label="Price"
        type="number"
        required={true}
        handleChange={handleChange}
      />

      <TextInput
        name="image"
        id="image"
        value={image}
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

export default SellCarsForm
