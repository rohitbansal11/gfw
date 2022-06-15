import React from "react"
const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`flex justify-around font-semibold  items-center text-indigo-700   px-4 py-3 rounded-md  w-[220px] h-[50px] transition ease-in-out shadow-md ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
