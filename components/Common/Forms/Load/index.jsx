import React, { useState, useEffect } from "react";
import { Select, TextInput, NumberInput } from "@components/Common";
import DropDown from "../SellTruck/statesdropdown";
import StatesSelect from "../SellTruck/statesdropdown";
import CitySelect from "../SellTruck/citiesdropdown";
import { useDispatch, useSelector } from "react-redux";
import { LoadListing } from "@store/load-store/load-action";
import Types from "./typedropdown";
import WeightTypes from "./weightdropdown";
import ForSaleHouse from "@pages/rent-house";

const Load = () => {
  const [formData, setFormData] = useState({
    title: "",
    state: "",
    city: "",
    year: "",
    contactno: null,
    emergency: false,
    weight: "",
    detail: "",
    weights: "",
    type: "",
    weights: "",
  });

  const dispatch = useDispatch();
  const load = useSelector((state) => {
    state.load;
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
  useEffect(() => {}, [load]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      ...formData,
      city: currentCity,
      state: currentState,
      image: "https://image.jpg", //@todo remove this and handle image upload
    };
    dispatch(LoadListing(payload));
    console.log("hh", { formData });
  };

  const [currentState, setCurrentState] = useState(false);
  const [currentCity, setCurrentCity] = useState("Alamo");
  const [mode, setMode] = useState(false);
  const s = () => {
    formData.emergency = !mode;
  };

  const toggle = () => {
    formData.emergency
      ? (formData.emergency = false)
      : (formData.emergency = true);
    console.log("nn", formData);
  };

  const handleCurrentState = (state) => {
    setCurrentState(state);
    setCurrentCity("");
  };
  const handleCurrentCity = (city) => {
    setCurrentCity(city);
  };

  const handleWeightChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        weights: state,
      };
    });
  };
  const handleTypeChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        type: state,
      };
    });
  };

  const { contactno, detail, weight, weights, year, emergency, title, type } =
    formData;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mx-auto flex-col px-4 w-[100%] md:w-[80%] max-w-[500px] py-4 shadow-2xl my-8 bg-white `}
    >
      <div className="flex justify-between  w-full text-[16px] text-indigo-900 outline-none border-[2px] border-indigo-500 mb-3 py-2 px-2 rounded-md shadow-md ">
        <span class="ml-3 text-lg font-bold text-gray-700 dark:text-gray-300">
          Emergency Loads :{" "}
        </span>
        <label
          for="default-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            onClick={() => {
              toggle();
            }}
            type="checkbox"
            name="emergency"
            value={emergency}
            id="default-toggle"
            className="sr-only peer"
          />
          <div class="w-11 h-5 mb-1 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <NumberInput
        name="weight"
        id="weight"
        value={weight}
        label=" Weight"
        placeholder="Weight"
        min="0"
        minLength="0"
        maxLength="10"
        required={true}
        type="number"
        handleChange={handleChange}
      />
      <span className="font-medium cursor-pointer text-indigo-900">
        Weight Type
      </span>
      <WeightTypes
        handleWeightChange={handleWeightChange}
        required={true}
        currentWeight={weights}
      />

      <span className="font-medium cursor-pointer text-indigo-900">Type</span>
      <Types
        handleTypeChange={handleTypeChange}
        required={true}
        currentType={type}
      />

      <h1 className="text-lg my-4">From :-</h1>
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
        disabled={currentState !== "" ? false : true}
      />
      <TextInput
        name="year"
        id="year"
        value={year}
        label="Pick-up Date & Time"
        placeholder="Date"
        required={true}
        type="date"
        handleChange={handleChange}
      />

      <TextInput
        name="detail"
        id="detail"
        minLength="0"
        maxLength={"30"}
        value={detail}
        label=" Detail Address"
        placeholder="Detail Address"
        required={true}
        type="text"
        handleChange={handleChange}
      />

      <h1 className="text-lg my-4">To :-</h1>
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
      <TextInput
        name="detail"
        id="detail"
        minLength="0"
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
        minLength="0"
        maxLength="40"
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
  );
};

export default Load;
