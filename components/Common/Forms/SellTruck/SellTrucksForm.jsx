import React, { useState, useEffect, useCallback } from "react"
import { NumberInput, TextInput } from "@components/Common"
// import { Previews } from "./Dropzone"
import StatesSelect from "./statesdropdown"
import CitySelect from "./citiesdropdown"
import MakeSelect from "./makedropdown"
import { useDispatch, useSelector } from "react-redux"
import { addSellTruckListing } from "../../../../store/sell-truck-store/sell-truck-action"
const SellTrucks = ({ className }) => {
  const [formData, setFormData] = useState({
    make: "",
    year: "",
    model: "",
    miles: "",
    title: "",
    contactno: null,
    image: [],
  })
  const dispatch = useDispatch()
  const sellTruckState = useSelector((state) => state.sellTruck)

  const [currentState, setCurrentState] = useState("")
  const [currentCity, setCurrentCity] = useState("Alamo")

  const handleMakeChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        make: state,
      }
    })
  }

  // const handleFileChange = (state) => {
  //   setFormData((prevState) => {
  //     return {
  //       ...prevState,
  //       image: state,
  //     }
  //   })
  // }
  const handleCurrentState = useCallback(
    (state) => {
      setCurrentState(state)
      setCurrentCity("")
    },
    [currentState]
  )
  const handleCurrentCity = useCallback(
    (city) => {
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
    const payload = {
      ...formData,
      city: currentCity,
      state: currentState,
      image: "https://image.jpg", //@todo remove it and handle image upload
    }
    dispatch(addSellTruckListing(payload))
    console.log("ggg" , formData)
  }
  useEffect(() => {}, [sellTruckState])
  const { year, model, miles, title, contactno,image } = formData

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
        name="model"
        id="model"
        maxLength='40'
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
        label="Miles"
        placeholder="Miles"
        type="number"
        maxLength='10'
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="title"
        id="title"
        maxLength='50'
        value={title}
        label="Ad title"
        placeholder="Ad Title"
        type="text"
        required={true}
        handleChange={handleChange}
      />{" "}
      <NumberInput
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact No"
        placeholder="eg-999999"
        type="number"
        maxLength='10'
       
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="image"
        id="image"
        value={image}
        label="Photo"
        placeholder="Photo"
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

export default SellTrucks
