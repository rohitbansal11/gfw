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
import moment from "moment";
import Swal from "sweetalert2";
const  Load = () => {
  const [formData, setFormData] = useState({
    emergency: false,
    weight: "",
    weight_type: "",
    type: "",
    from: {
      state: "",
      city: "",
      address: "",
      pickupdate: "",
    },
    to: {
      state: "",
      city: "",
      address: "",
    },
    contactno: "",
    title: "",
    location: {
      lat: "",
      long: "",
    },
  });
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentStateTo, setCurrentStateTo] = useState("");
  const [currentCityTo, setCurrentCityTo] = useState("");
  const [mode, setMode] = useState(false);
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
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const handleData = (pos) => {
    var crd = pos.coords;
    setFormData({
      ...formData,
      emergency: true,
      location: {
        ...formData.location,
        lat: crd.latitude,
        long: crd.longitude,
      },
    });
  };

  const handleGeoError = (err) => {
    setFormData({
      ...formData,
      emergency: false,
      location: {
        ...formData.location,
        lat: "",
        long: "",
      },
    });
    Swal.fire({
      title: "Error",
      icon: "error",
      text: "There is a Error to getting Your Loaction",
    });
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.from.state = currentState;
    formData.from.city = currentCity;
    formData.to.state = currentStateTo;
    formData.to.city = currentCityTo;
    dispatch(LoadListing(formData));
  };

  const handleEmrgenyLoadInput = (value) => {
    if (value) {
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(handleData);
            } else if (result.state === "prompt") {
              navigator.geolocation.getCurrentPosition(
                handleData,
                handleGeoError,
                options
              );
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
              Swal.fire({
                title: "Error",
                icon: "error",
                text: "Can Not Enter Emergency Loads WithOut Location",
              });
              setFormData({
                ...formData,
                emergency: false,
              });
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        setFormData({
          ...formData,
          emergency: false,
        });
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Can Not Enter Emergency Loads WithOut Location Please Enable Location",
        });
      }
    } else {
      setFormData({
        ...formData,
        emergency: false,
        location: {
          ...formData.location,
          lat: "",
          long: "",
        },
      });
    }
  };

  const handleCurrentState = (state) => {
    setCurrentState(state);
    setCurrentCity("");
  };
  const handleCurrentCity = (city) => {
    setCurrentCity(city);
  };
  const handleCurrentStateTo = (state) => {
    setCurrentStateTo(state);
    setCurrentCityTo("");
  };
  const handleCurrentCityTo = (city) => {
    setCurrentCityTo(city);
  };

  const handleWeightChange = (state) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        weight_type: state,
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

  const handlePickUpDatefrom = (value) => {
    console.log(value);
    setFormData({
      ...formData,
      from: {
        ...formData.from,
        pickupdate: value,
      },
    });
  };

  const handleaddressfrom = (value) => {
    setFormData({
      ...formData,
      from: {
        ...formData.from,
        address: value,
      },
    });
  };

  const handletoaddress = (value) => {
    setFormData({
      ...formData,
      to: {
        ...formData.to,
        address: value,
      },
    });
  };

  const {
    contactno,
    toDetail,
    fromDetail,
    weight,
    weight_type,
    year,
    emergency,
    title,
    type,
    from, 
    to,
  } = formData;

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
            onChange={(e) => {
              handleEmrgenyLoadInput(e.target.checked);
            }}
            type="checkbox"
            name="emergency"
            value={emergency}
            checked={emergency}
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
        maxLength="10"
        minLength="0"
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
        currentWeight={weight_type}
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
        // value={from.state}
        handleCurrentState={handleCurrentState}
        currentState={currentState}
      />
      <span>City</span>
      <CitySelect
        handleCurrentCity={handleCurrentCity}
        // value={from.city}
        currentCity={currentCity}
        currentState={currentState}
        disabled={currentState !== "" ? false : true}
      />
      <TextInput
        name="year"
        id="year"
        value={from.pickupdate}
        label="Pick-up Date & Time"
        placeholder="Date"
        required={true}
        type="date"
        min={moment(new Date()).format("YYYY-MM-DD")}
        handleChange={(e) => {
          handlePickUpDatefrom(e.target.value);
        }}
      />

      <TextInput
        name="fromDetail"
        id="fromDetail"
        maxLength="50"
        minLength="0"
        value={from.address}
        label=" Detail Address"
        placeholder="Detail Address"
        required={true}
        type="text"
        handleChange={(e) => {
          handleaddressfrom(e.target.value);
        }}
      />

      <h1 className="text-lg my-4">To :-</h1>
      <span>State</span>
      <StatesSelect
        handleCurrentState={handleCurrentStateTo}
        currentState={currentStateTo}
      />
      <span>City</span>
      <CitySelect
        handleCurrentCity={handleCurrentCityTo}
        currentCity={currentCityTo}
        currentState={currentStateTo}
        disabled={currentStateTo !== "" ? false : true}
      />
      <TextInput
        name="toDetail"
        id="toDetail"
        maxLength="50"
        minLength="0"
        value={to.address}
        label=" Detail Address"
        placeholder="Detail Address"
        required={true}
        type="text"
        handleChange={(e) => {
          handletoaddress(e.target.value);
        }}
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

export default Load;
