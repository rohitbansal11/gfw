import { Section } from "@components/Common"
import React, { useState } from "react"
import Link from "next/link"
import { TextInput } from "@components/Common"

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: null,
    image: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleShowPassword = () => {
    console.log(showPassword)
    setShowPassword(!showPassword)
  }
  const handleShowConfirmPassword = () => {
    console.log(showConfirmPassword)
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ formData })
  }

  const { email, password, name, confirmPassword, image } = formData

  return (
    <div className=" bg-[url(/images/auth.png)] md:bg-[url()] bg-indigo-400  md:bg-white py-4 flex justify-center items-center w-full flex-col md:flex-row">
      <div className="w-[50%]  my-[60px]">
        <div className="w-[100%] md:w-[80%] max-w-[500px] drop-shadow-2xl mx-auto bg-white p-6">
          <h3 className="text-2xl font-bold tracking-wide mb-4">Register</h3>
          <p className="mb-2">Already have an account?</p>
          <p className="text-xl mb-8">
            You can{" "}
            <Link href="/login">
              <a className="text-indigo-700 font-semibold">Login here</a>
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="">
            <TextInput
              name="name"
              label="Your Name"
              type="name"
              value={name}
              placeholder="Your Name"
              required
              handleChange={handleChange}
            />
            <TextInput
              name="email"
              label="Your Email"
              type="email"
              value={email}
              placeholder="Your Email"
              required
              handleChange={handleChange}
            />
            <TextInput
              name="password"
              label="Your Password"
              type="password"
              value={password}
              placeholder="Your Password"
              required
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            <TextInput
              name="confirmPassword"
              label="Confirm Password"
              type="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              required
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
              handleChange={handleChange}
              handleShowPassword={handleShowConfirmPassword}
            />
            <TextInput
              name="image"
              label="Profie Picture"
              placeholder="Profile Picture"
              required
              type="file"
            />
            <button
              type="submit"
              className="py-2 w-full bg-indigo-700 text-white font-semibold tracking-wide text-center rounded-lg shadow-lg mt-12 hover:drop-shadow-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="w-[50%] hidden md:block px-8 bg-indigo-700 rounded-md drop-shadow-sm p-6">
        <h4 className="mb-8 text-2xl font-bold text-white">
          Register to continue
        </h4>
        <div className="">
          <img className="w-full" src="/images/auth.png" />
        </div>
      </div>
    </div>
  )
}

export default Register
