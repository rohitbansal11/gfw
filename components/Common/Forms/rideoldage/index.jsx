import React, { useEffect, useState } from "react"
import { TextInput } from "@components/Common"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import TitleList from "../rideschools/titlelistdropdown"
import { Previews } from "../SellTruck/Dropzone"
import { useDispatch,useSelector } from "react-redux"
import { RideOldAgeListing } from "../../../../store/ride-store/ride-action"

const RideOldAge = ({ className }) => {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pickup: "",
    pickup_date_time: "",
    dropoff: "",
    title:"",
    contact_no: null,
  })
  const handleChange = (e) => {

    let value = e.target.value
    if (e.target.name === "miles") 
    {
      value = parseInt(value)
    }
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      }
    })
  }
  const dispatch = useDispatch()
  const rideOldAge = useSelector((state) => state.rideOldAge)
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
    const payload = {...formData,setCurrentCity,setCurrentState}
    dispatch(RideOldAgeListing(payload))
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
  const {pickup,pickup_date_time,dropoff, title, contact_no } = formData
  useEffect(() => {}, [rideOldAge])

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
        disabled={!!currentState?currentCity:currentState}
      />
      <TextInput
        name="pickup"
        id="pickup"
        value={pickup}
        label="Pickup"
        placeholder="Pick-up"
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
      x<TextInput
        name="dropoff"
        id="dropoff"
        value={dropoff}
        label="Drop-Off"
        placeholder="Drop-Off"
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

export default RideOldAge
