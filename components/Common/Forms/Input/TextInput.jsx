import React from "react"
import { FaCameraRetro } from "react-icons/fa"

const TextInput = ({
  name,
  id,
  value,
  handleChange,
  label,
  placeholder,
  errorMsg,
  required,
  type,
  inputClassName,
}) => {
  return (
    <div className="flex-1 my-[2px]">
      {label && (
        <label
          htmlFor="make"
          className="font-medium cursor-pointer text-indigo-900 "
        >
          <span>{`${label}`}</span>
          {required ? <span className="text-xl text-red-700">*</span> : null}
        </label>
      )}
      <div className="relative">
        <input
          className={` w-full text-[16px] text-indigo-900 outline-none border-[2px] border-indigo-500 mb-1 py-2 px-2 rounded-md shadow-md ${inputClassName}`}
          type={type ? type : "text"}
          name={name}
          onChange={handleChange}
          value={value ? value : null}
          required={!!required}
          id={id}
          placeholder={placeholder}
        />
        {type === "file" && (
          <div className="absolute top-[30%] right-4">
            <FaCameraRetro className="text-indigo-700" size={20} />
          </div>
        )}
      </div>
      <p className="text-red-700 text-[12px] ml-2">{errorMsg}</p>
    </div>
  )
}

export default TextInput
