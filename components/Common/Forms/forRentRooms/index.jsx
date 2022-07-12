import React, { useEffect, useState } from "react";
import { NumberInput, TextInput } from "@components/Common";
// import DropDown from "../SellTruck/statesdropdown"
import StatesSelect from "../SellTruck/statesdropdown";
import CitySelect from "../SellTruck/citiesdropdown";
// import { StyledDropzone } from "../SellTruck/Dropzone"
import { useDispatch, useSelector } from "react-redux";
import { rentroomsListing } from "@store/sell-or-rent-store/sell-or-rent-action";
const ForRentRooms = ({ className }) => {
  const [formData, setFormData] = useState({
    rooms: "",
    title: "",
    price: "",
    contactno: null,
    image:
      "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?s=612x612",
  });
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");

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
  const rentrooms = useSelector((state) => {
    state.rentrooms;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { ...formData, city: currentCity, state: currentState };
    dispatch(rentroomsListing(payload));
    // console.log("jj" , {formData})
  };
  const handleCurrentState = (state) => {
    setCurrentState(state);
    setCurrentCity("");
  };
  const handleCurrentCity = (city) => {
    // console.log({ city: city })
    setCurrentCity(city);
  };

  useEffect(() => {}, [rentrooms]);

  const { rooms, contactno, title, price, image } = formData;

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
        disabled={currentState !== "" ? false : true}
      />

      <NumberInput
        name="rooms"
        id="rooms"
        value={rooms}
        maxLength="10"
        minLength="0"
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
        maxLength="70"
        minLength="0"
        label=" Ad Title"
        placeholder="Title"
        required={true}
        type="text"
        handleChange={handleChange}
      />
      <NumberInput
        name="price"
        id="price"
        label="Price"
        type="number"
        value={price}
        maxLength="10"
        minLength="0"
        placeholder="Price"
        required={true}
        handleChange={handleChange}
      />

      <NumberInput
        name="contactno"
        id="contactno"
        value={contactno}
        label="Contact Number"
        maxLength="10"
        minLength="0"
        placeholder="Contact Number"
        type="number"
        required={true}
        handleChange={handleChange}
      />

      <TextInput
        name="image"
        id="image"
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
  );
};

export default ForRentRooms;
