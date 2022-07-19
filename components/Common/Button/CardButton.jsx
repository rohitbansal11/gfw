import React from "react";

const CardButton = ({ className }) => {
  return (
    <div className={`flex my-4 ${className}  justify-end`}>
      <button
        className={`text-white bg-red-600 px-4  rounded-2xl shadow-lg  font-bold py-2 hover:text-blue-600`}
      >
        Delete
      </button>
    </div>
  );
};

export default CardButton;
