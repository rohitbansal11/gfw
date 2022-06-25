import React, { useState } from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import TitleList from "./titlelistdropdown"
import { Previews } from "../SellTruck/Dropzone"
import { useDispatch,useSelector } from "react-redux"
import { RideSchoolListing } from "../../../../store/ride-store/ride-action"
import { useEffect } from "react"

const RideSchool = ({ className }) => {
  const [formData, setFormData] = useState({
    pickup: "",
    pickup_date_time: "",
    Schoolname: "",
    title:"",
    contact_no: null,
    })
  const [currentState, setCurrentState] = useState("Texas")
  const [currentCity, setCurrentCity] = useState("Alamo")
    const handleCurrentState = (state) => {
    setCurrentState(state)
    setCurrentCity("")
  }
  const dispatch = useDispatch()
  const rideSchool = useSelector((state) => state.rideSchool)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...formData, currentCity, currentState }
    console.log({ payload, formData })
    dispatch(RideSchoolListing(payload))
  }
  const handleFileChange = (state)=>{
    setFormData((prevState)=>{
      return{
        ...prevState,
        files:state,
      }
    })
  }
  const handleTitleChange=(state)=>{
    setFormData((prevState)=>{
    return{
      ...prevState,
      title:state
    }  
    })
  }

  useEffect(() => {}, [rideSchool])
  const { pickup, pickup_date_time, Schoolname, title,contact_no } = formData

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
        disabled={false}
      />
      <TextInput
        name="pickup"
        id="pickup"
        value={pickup}
        label="Pickup"
        placeholder="Pickup"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="pickup_date_time"
        id="pickup_date_time"
        value={pickup_date_time}
        label="Pickup Date & time"
        placeholder="Pick-up"
        required={true}
        type="date"
        handleChange={handleChange}
      />
      <TextInput
        name="Schoolname"
        id="Schoolname"
        value={Schoolname}
        label="School name"
        placeholder="School name"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <span>Ad Title</span>
      <TitleList

        handleTitleChange={handleTitleChange}
      currentTitle={title}
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

export default RideSchool
