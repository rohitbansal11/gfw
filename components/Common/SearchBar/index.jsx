import React, { useState } from "react"
import CitySelect from "../Forms/SellTruck/citiesdropdown"
import StatesSelect from "../Forms/SellTruck/statesdropdown"
const SearchBar = () => {
  const [currentStateFrom, setCurrentStateFrom] = useState(null)
  const [currentCityFrom, setCurrentCityFrom] = useState(null)
  const [currentStateTo, setCurrentStateTo] = useState(null)
  const [currentCityTo, setCurrentCityTo] = useState(null)

  // Handlers
  const handleCurrentStateFrom = (state) => {
    setCurrentStateFrom(state)
    setCurrentCityFrom(null)
  }
  const handleCurrentCityFrom = (city) => {
    setCurrentCityFrom(city)
  }
  const handleCurrentStateTo = (state) => {
    setCurrentStateTo(state)
    setCurrentCityTo(null)
  }
  const handleCurrentCityTo = (city) => {
    setCurrentCityTo(city)
  }
  return (
    <>
      <div className=" my-16 flex w-full justify-center">
        <div className="w-[80%] bg-white shadow-md rounded-md flex ">
          <div className="relative flex gap-x-2 w-[40%] border-r-2 border-gray-300  px-2 items-center py-2">
            <h5 className="absolute  top-[-40px] left-[7px] flex w-[100px] py-2 justify-center items-center rounded-md shadow-md bg-indigo-700 text-white">
              From
            </h5>

            <div className="w-[70%]">
              <StatesSelect handleCurrentState={handleCurrentStateFrom} />
            </div>
            <CitySelect
              currentCity={currentCityFrom}
              currentState={currentStateFrom}
              disabled={typeof currentStateFrom !== typeof ""}
              handleCurrentCity={handleCurrentCityFrom}
            />
          </div>
          <div className="relative flex gap-x-2 w-[40%] px-2 items-center py-2">
            <h5 className="absolute top-[-40px] left-[7px] flex w-[100px] py-2 justify-center items-center rounded-md shadow-md bg-indigo-700 text-white">
              To
            </h5>

            <div className="w-[70%]">
              <StatesSelect handleCurrentState={handleCurrentStateTo} />
            </div>
            <CitySelect
              currentCity={currentCityTo}
              currentState={currentStateTo}
              disabled={typeof currentStateTo !== typeof ""}
              handleCurrentCity={handleCurrentCityFrom}
            />
          </div>
          <div className="w-[20%] flex  justify-end">
            <button className="w-[140px] shadow-none bg-indigo-700 text-white rounded-md hover:bg-indigo-500 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
