import React, { useState } from "react";
import { NumberInput, TextInput } from "@components/Common";
import DropDown from "../SellTruck/statesdropdown";
import StatesSelect from "../SellTruck/statesdropdown";
import CitySelect from "../SellTruck/citiesdropdown";
import TitleList from "./titlelistdropdown";
// import { Previews } from "../SellTruck/Dropzone"
import { useDispatch, useSelector } from "react-redux";
import { RideSchoolListing } from "../../../../store/ride-store/ride-action";
import { useEffect } from "react";
import moment from "moment";
const RideSchool = ({ className }) => {
  const [formData, setFormData] = useState({
    pickup: "",
    pickupdate: "",
    schoolname: "",
    title: "",
    contactno: null,
  });
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const handleCurrentState = (state) => {
    setCurrentState(state);
    setCurrentCity("");
  };
  const handleCurrentCity = (city) => {
    setCurrentCity(city);
  };
  const dispatch = useDispatch();
  const rideSchool = useSelector((state) => state.rideSchool);

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "miles") {
      value = parseInt(value);
    }
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, city: currentCity, state: currentState };
    dispatch(RideSchoolListing(payload));
    // console.log('pp',{formData})
  };

  const handleTitleChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        title: state,
      };
    });
  };

  useEffect(() => {}, [rideSchool]);
  const { pickup, pickupdate, schoolname, title, contactno } = formData;

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
        disabled={currentState !== "" ? false : true}
      />
      <TextInput
        name="pickup"
        id="pickup"
        value={pickup}
        label="Pickup"
        maxLength="10"
        minLength="0"
        placeholder="Pickup"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <TextInput
        name="pickupdate"
        id="pickupdate"
        value={pickupdate}
        label="Pickup Date & time"
        placeholder="Pick-up"
        required={true}
        type="date"
        min={moment(new Date()).format("YYYY-MM-DD")}
        handleChange={handleChange}
      />

      <TextInput
        name="schoolname"
        id="schoolname"
        value={schoolname}
        label="School name"
        maxLength="6"
        minLength="0"
        placeholder="School name"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <span>Ad Title</span>
      <TitleList handleTitleChange={handleTitleChange} currentTitle={title} />
      <NumberInput
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact Number"
        placeholder="Contact Number"
        type="number"
        maxLength="10"
        minLength="0"
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
  );
};

export default RideSchool;
