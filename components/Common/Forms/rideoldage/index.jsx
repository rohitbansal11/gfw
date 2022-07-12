import React, { useEffect, useState } from "react";
import { NumberInput, TextInput } from "@components/Common";
import StatesSelect from "../SellTruck/statesdropdown";
import CitySelect from "../SellTruck/citiesdropdown";
import TitleList from "../rideschools/titlelistdropdown";
import { useDispatch, useSelector } from "react-redux";
import { RideOldAgeListing } from "../../../../store/ride-store/ride-action";

const RideOldAge = ({ className }) => {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pickup: "",
    pickupdate: "",
    dropoff: "",
    title: "",
    contactno: null,
  });
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
  const dispatch = useDispatch();
  const rideOldAge = useSelector((state) => state.rideOldAge);
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("Alamo");
  const handleCurrentState = (state) => {
    setCurrentState(state);
    setCurrentCity("");
  };
  const handleCurrentCity = (city) => {
    // console.log({ city: city })
    setCurrentCity(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ formData })
    const payload = { ...formData, city: currentCity, state: currentState };
    dispatch(RideOldAgeListing(payload));
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
  const { pickup, pickupdate, dropoff, title, contactno } = formData;
  useEffect(() => {}, [rideOldAge]);

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
        placeholder="Pick-up"
        maxLength="70"
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
        handleChange={handleChange}
      />
      <TextInput
        name="dropoff"
        id="dropoff"
        value={dropoff}
        label="Drop-Off"
        maxLength="70"
        placeholder="Drop-Off"
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
        placeholder="eg-999999"
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
  );
};

export default RideOldAge;
