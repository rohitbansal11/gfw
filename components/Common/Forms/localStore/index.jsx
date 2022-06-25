import React, { useState ,useEffect} from "react"
import { TextInput } from "@components/Common"
import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown"
import CitySelect from "../SellTruck/citiesdropdown"
import { useDispatch, useSelector } from "react-redux"
import { LocalStoreListing } from "@store/local-store/local-action"

const Localstore = ({ className }) => {
  const [formData, setFormData] = useState({
   
    jobpost: "",
    nameofstore: "",
    location: "",
    contact_no: null,
    title: "",

    
  })
  const dispatch = useDispatch();
  const localstore= useSelector((state)=>{state.localstore});
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
    console.log({ formData ,currentCity,currentState})
  const payload={...formData,currentCity,currentState}
  dispatch(LocalStoreListing(payload))
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

useEffect(() => {}, [localstore])



  const { jobpost,nameofstore,location,contact_no,title } = formData

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
        name="job post"
        id="job post"
        value={jobpost}
        label="Job Post"
        placeholder="Job Post"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="nameofstore"
        id="nameofstore"
        value={nameofstore}
        label="name of store"
        placeholder="name of store"
        required={true}
        handleChange={handleChange}
      />

      <TextInput
        name="location"
        id="location"
        value={location}
        label="Location"
        placeholder="Location"
        required={true}
        type="text"
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
        <TextInput
        name="title"
        id="title"
        value={title}
        label="Ad Title"
        placeholder="Ad Title"
        required={true}
        type="text"
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

export default  Localstore
