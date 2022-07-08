import React, { useState, useEffect } from "react"
import { Select, TextInput ,NumberInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { useDispatch, useSelector } from "react-redux"
import { LoadListing } from "@store/load-store/load-action"
import Types from "./typedropdown"
import WeightTypes from "./weightdropdown"

const Load = () => {

    const [formData, setFormData] = useState({
        title: "",
        year: null,   
        contactno: null,

      })

      const dispatch = useDispatch()
      const load = useSelector((state) => {
        state.load
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
      useEffect(() => {}, [load])
      const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
          ...formData,
          city: currentCity,
          state: currentState,
          image: "https://image.jpg", //@todo remove this and handle image upload
        }
        dispatch(LoadListing(payload))
        // console.log("hh" , {formData})
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
     
      const handleWeightChange = (state) => {
        setFormData((prevState) => {
          return {
            ...prevState,
            weight: state,
          }
        })
      }
      const handleTypeChange = (state) => {
        setFormData((prevState) => {
          return {
            ...prevState,
            weight: state,
          }
        })
      }
    
    
      const { contactno, detail,weight,year, title,type } = formData


  return (
    <form
    onSubmit={handleSubmit}
    className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white `}
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
      disabled={currentState ? false : true}
    />
    <NumberInput
      name="weight"
      id="weight"
      value={weight}
      label=" Weight"
      placeholder="Weight"
      min="0"
      minLength='0'
      maxLength="10"
      required={true}
      type="number"
      handleChange={handleChange}
    />
    <span className="font-medium cursor-pointer text-indigo-900">Weight Type</span>
    <WeightTypes handleWeightChange={handleWeightChange} currentWeight={weight} />

    <span  className="font-medium cursor-pointer text-indigo-900">Type</span>
    <Types
     handleTypeChange={handleTypeChange} currentType={type}
    />
    <TextInput
        name="year"
        id="year"
        value={year}
        label="Date"
        placeholder="Date"
        required={true}
        type="date"
        handleChange={handleChange}
      />
    
    <TextInput
      name="detail"
      id="detail"
      minLength={"4"}
      maxLength={"30"}
      value={detail}
      label=" Detail Address"
      placeholder="Detail Address"
      required={true}
      type="text"
      handleChange={handleChange}
    />
    <TextInput
      name="title"
      id="title"
      value={title}
      minLength="4"
      maxLength="10"
      label=" Ad Title"
      placeholder="Title"
      required={true}
      type="text"
      handleChange={handleChange}
    />

    <NumberInput
      name="contactno"
      id="contactno"
      value={contactno}
      label="Contact Number"
      placeholder="Contact Number"
      type="number"
      maxLength="10"
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

export default Load