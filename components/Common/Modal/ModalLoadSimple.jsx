import React, { useState, useEffect } from "react";
import { city } from "./city";
import Modal from "react-modal";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { SaveModalDataLoads } from "../../../store/AllDataMain/AllDataaction";
import {
  AiFillDownCircle,
  AiTwotoneEnvironment,
  AiOutlineDash,
} from "react-icons/ai";

export default function MadalHidden() {
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [listData, setListData] = useState();
  const [currentStateOne, setCurrentStateOne] = useState("");
  const [currentStateTwo, setCurrentStateTwo] = useState("");
  const [cityALl, setCityAll] = useState([]);
  const [cityALlTwo, setCityAllTWo] = useState([]);
  const [checkUser, setCheckUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    stateOne: "",
    cityOne: "",
    stateTwo: "",
    cityTwo: "",
  });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    let datavalue = city?.map((w) => {
      return w.state;
    });
    let simplefilter = datavalue.filter(onlyUnique);
    let DataStateAll = simplefilter?.map((e) => {
      return { value: e, label: e };
    });

    setListData(DataStateAll);
  }, []);

  useEffect(() => {
    let cityFilter = city
      ?.filter((w) => {
        return w.state.toLowerCase() == currentStateOne?.toLowerCase();
      })
      .map((w) => {
        return w.city;
      });
    if (cityFilter?.length > 0) {
      cityFilter.unshift("All");

      let DataCityAll = cityFilter?.map((e) => {
        return { value: e, label: e };
      });
      setCityAll(DataCityAll);
    }
  }, [currentStateOne]);
  useEffect(() => {
    let cityFilter = city
      ?.filter((w) => {
        return w.state.toLowerCase() == currentStateTwo?.toLowerCase();
      })
      .map((w) => {
        return w.city;
      });
    if (cityFilter?.length > 0) {
      cityFilter.unshift("All");

      let DataCityAll = cityFilter?.map((e) => {
        return { value: e, label: e };
      });
      setCityAllTWo(DataCityAll);
    }
  }, [currentStateTwo]);

  const customStyles = {
    content: {
      top: "50px",
      bottom: "50px",
      left: "150px",
      right: "150px",
    },
  };

  useEffect(() => {
    setCheckUser(selector?.token);
    setData(selector?.location_loads);
  }, [selector]);

  function closeModal() {
    setShowModal(false);
  }

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

  const handleState = (e) => {
    setCurrentStateOne(e?.value);
    setData({
      ...data,
      stateOne: e?.value,
      cityOne: "All",
    });
  };
  const handleStateTwo = (e) => {
    setCurrentStateTwo(e?.value);
    setData({
      ...data,
      stateTwo: e?.value,
      cityTwo: "All",
    });
  };

  const handleCity = (e) => {
    setData({
      ...data,
      cityOne: e?.value,
    });
  };
  const handleCityTwo = (e) => {
    setData({
      ...data,
      cityTwo: e?.value,
    });
  };

  const handleSubmitButton = () => {
    dispatch(SaveModalDataLoads(data));
    setShowModal(false);
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-end w-50 ">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-evenly">
          <div className="  w-full mt-5  ">
            <h2 className="text-xl font-bold mb-6">State From :-</h2>
            <div className=" w-80">
              <Select
                options={listData}
                onChange={(e) => {
                  handleState(e);
                }}
              />
            </div>
          </div>
          <div className="  w-full mt-5  ">
            <h2 className="text-xl font-bold mb-6">State To :-</h2>
            <div className=" w-80">
              <Select
                options={listData}
                onChange={(e) => {
                  handleStateTwo(e);
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          {Object?.keys(checkUser)?.length > 0 &&
            checkUser?.sub_data?.sub_role == "platinum" && (
              <div className=" w-full mt-5 ">
                <h2 className="text-xl font-bold mb-6">City From :-</h2>
                <div className=" w-96">
                  <Select
                    options={cityALl}
                    onChange={(e) => {
                      handleCity(e);
                    }}
                  />
                </div>
              </div>
            )}
          {Object?.keys(checkUser)?.length > 0 &&
            checkUser?.sub_data?.sub_role == "platinum" && (
              <div className=" w-full mt-5 ">
                <h2 className="text-xl font-bold mb-6">City To :-</h2>
                <div className=" w-96">
                  <Select
                    options={cityALlTwo}
                    onChange={(e) => {
                      handleCityTwo(e);
                    }}
                  />
                </div>
              </div>
            )}
        </div>

        <div className="flex justify-end mt-20">
          <div className=" w-60 flex justify-around">
            <button
              className="text-white w-32 h-8 bg-red-500/100 rounded-lg cursor-pointer text-center mr-10"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <buuton
              onClick={() => {
                handleSubmitButton();
              }}
              className="text-white w-32 h-8 bg-green-500/100 rounded-lg cursor-pointer text-center pt-1"
            >
              Submit
            </buuton>
          </div>
        </div>
      </Modal>
      <div
        className="flex justify-start pt-2 cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex justify-start pt-2 ">
          <div className="pl-2 pt-1 pr-1">
            <AiTwotoneEnvironment />
          </div>

          <div>
            <h1 className="text-lg text-sky-400 ">
              {data?.stateOne == "" || data?.cityOne == ""
                ? "No Data"
                : `${data?.cityOne}, ${data?.stateOne}`}
            </h1>
          </div>
          <div className="pl-2 pt-1 pr-1">
            <AiFillDownCircle />
          </div>
        </div>
        <div className="pt-3 ml-5 mr-5">
          <AiOutlineDash />
        </div>

        <div className="flex justify-start pt-2 ">
          <div className="pl-2 pt-1 pr-1">
            <AiTwotoneEnvironment />
          </div>

          <div>
            <h1 className="text-lg text-sky-400 ">
              {data?.stateTwo == "" || data?.cityOne == ""
                ? "No Data"
                : `${data?.cityTwo}, ${data?.stateTwo}`}
            </h1>
          </div>

          <div className="pl-2 pt-1 pr-1">
            <AiFillDownCircle />
          </div>
        </div>
      </div>
    </>
  );
}
