import React from "react"
const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`flex justify-center gap-3 font-semibold  items-center   px-4 py-3 rounded-md  w-[220px] h-[50px] transition ease-in-out shadow-md ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
