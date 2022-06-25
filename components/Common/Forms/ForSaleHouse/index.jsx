import React, { useState ,useEffect} from "react"
import { TextInput } from "@components/Common"

import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { Previews, StyledDropzone } from "../SellTruck/Dropzone"
import { sellhouseListing } from "@store/sell-or-rent-store/sell-or-rent-action"
import { useDispatch,useSelector } from "react-redux"

const forSaleHouse = ({ className }) => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    year: null,
    rooms: "",
    state: "",
    contact_no: null,
    photo: {},
  })
    const dispatch=useDispatch();
  const sellhouse=useSelector((state)=>{
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
        file: state,
      }
    })
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    console.log({ formData })
    let payload={...formData,currentCity,currentState}
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

  const {  contact_no, rooms,title } = formData

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
        handleChange={handleChange}
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
