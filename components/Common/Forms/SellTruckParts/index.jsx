import React, { useState, useEffect } from "react"
import { NumberInput, TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import MakeSelect from "../SellTruck/makedropdown"
// import { Previews } from "../SellTruck/Dropzone"
import { useDispatch, useSelector } from "react-redux"
import { addSellTruckpartsListing } from "../../../../store/sell-truck-store/sell-truck-action"
const SellTruckPartsForm = ({ className }) => {
  const [formData, setFormData] = useState({
    part: "",
    price: null,
    make: "",
    year: null,
    model: "",
    title: "",
    contactno: null,
    image: [],
  })

  const dispatch = useDispatch()
  const selltruckparts = useSelector((state) => {
    state.selltruckparts
  })
  // console.log("sellll",{selltruckparts})
  const [currentState, setCurrentState] = useState(false)

  const [currentCity, setCurrentCity] = useState("Alamo")

  const handleCurrentState = (state) => {
    setCurrentState(state)
    setCurrentCity("")
  }
  const handleCurrentCity = (city) => {
    setCurrentCity(city)
  }
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
    const payload = { 
      ...formData,
       city: currentCity,
       state: currentState,
       }
    dispatch(addSellTruckpartsListing(payload))
    console.log("dispach" ,{formData})
  }

  const { part, make, year, model, price, title, contactno, image } = formData

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
      <span className="my-1">City</span>
      <CitySelect
        handleCurrentCity={handleCurrentCity}
        currentCity={currentCity}
        currentState={currentState}
        disabled={!!currentState ? false : true}
      />
      <TextInput
        name="part"
        id="part"
        value={part}
        maxLength='30'
        label="Part"
        placeholder="Part"
        required={true}
        handleChange={handleChange}
      />
      <span>Make</span>

      <MakeSelect
        handleMakeChange={handleMakeChange}
        make={make}
        handleChange={handleMakeChange}
      />
      <TextInput
        name="year"
        id="year"
        value={year}
        type="date"
        label="Year"
        placeholder="Year"
        required={true}
        handleChange={handleChange}
      />
      <TextInput
        name="model"
        id="model"
        value={model}
        label="Model"
        type="text"
        maxLength='20'
        placeholder="Model"
        required={true}
        handleChange={handleChange}
      />

      <NumberInput
        name="price"
        id="price"
        value={price}
        label="Price"
        maxLength='10'
        placeholder="Price"
        required={true}
        type="number"
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
        maxLength='30'
        handleChange={handleChange}
      />

      <NumberInput
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact Number"
        placeholder="eg-999999"
        type="number"
        maxLength="10"
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

export default SellTruckPartsForm
