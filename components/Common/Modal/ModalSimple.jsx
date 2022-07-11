import React, { useState, useEffect } from "react";
import { city } from "./city";
import Modal from "react-modal";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { SaveModalData } from "../../../store/AllDataMain/AllDataaction";
import { AiFillDownCircle, AiTwotoneEnvironment } from "react-icons/ai";

export default function MadalHidden() {
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre?.alldata);
  const [listData, setListData] = useState();
  const [currentState, setCurrentState] = useState("All");
  const [cityALl, setCityAll] = useState([]);
  const [checkUser, setCheckUser] = useState({});
  const [data, setData] = useState({ state: "", city: "" });
  const [showModal, setShowModal] = useState(false);
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
        return w.state.toLowerCase() == currentState?.toLowerCase();
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
  }, [currentState]);
  const customStyles = {
    content: {
      top: "250px",
      bottom: "250px",
      left: "350px",
      right: "350px",
    },
  };

  useEffect(() => {
    setCheckUser(selector?.token);
    setData({
      ...data,
      state: selector?.location?.state,
      city: selector?.location?.city,
    });
  }, [selector]);

  function closeModal() {
    setShowModal(false);
  }

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

  const handleState = (e) => {
    setCurrentState(e?.value);
    setData({
      ...data,
      state: e?.value,
      city: "All",
    });
  };

  const handleCity = (e) => {
    setData({
      ...data,
      city: e?.value,
    });
  };

  const handleSubmitButton = () => {
    dispatch(SaveModalData(data));
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

        <div className="  w-full mt-5  ">
          <h2 className="text-xl font-bold mb-6">State :-</h2>
          <div className=" w-96">
            <Select
              options={listData}
              onChange={(e) => {
                handleState(e);
              }}
            />
          </div>
        </div>

        {Object?.keys(checkUser)?.length > 0 &&
          checkUser?.sub_data?.sub_role == "platinum" && (
            <div className=" w-full mt-5 ">
              <h2 className="text-xl font-bold mb-6">City :-</h2>
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
        <div className="pl-2 pt-1 pr-1">
          <AiTwotoneEnvironment />
        </div>

        <div>
          <h1 className="text-lg text-sky-400 ">
            {data?.state == "" || data?.city == ""
              ? "No Data"
              : `${data?.city}, ${data?.state}`}
          </h1>
        </div>
        <div className="pl-2 pt-1 pr-1">
          <AiFillDownCircle />
        </div>
      </div>
    </>
  );
}
