import { Section } from "@components/Common"
import React, { useState } from "react"
import Link from "next/link"
import { TextInput } from "@components/Common"
import axios from "@utils/axios"
import { useDispatch } from "react-redux"
import { loginUser } from "@store/user-store/userActions"

const Login = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  })

  const [token, setToken] = useState();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value) 
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    })
  }
  // console.log("hhhhh" , {formData})

  const handleShowPassword = () => {
    console.log(showPassword)
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ formData })
    const payload = {...formData, email:email , password:password}
    dispatch(loginUser(payload))
    console.log({formData})
  }
  

  const { email, password } = formData

  return (
    <div className=" bg-[url(/images/auth.png)] md:bg-[url()] bg-indigo-400  md:bg-white py-4 flex justify-center items-center w-full flex-col md:flex-row">
      <div className="w-[50%]  my-[60px]">
        <div className="w-[100%] md:w-[80%] max-w-[500px] drop-shadow-2xl mx-auto bg-white p-6">
          <h3 className="text-2xl font-bold tracking-wide mb-4">Login</h3>
          <p className="mb-2">If you don't have an account</p>
          <p className="text-xl mb-8">
            You can{" "}
            <Link href="/register">
              <a className="text-indigo-700 font-semibold">Register here</a>
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="">
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
            <button
              type="submit"
              className="py-2 w-full bg-indigo-700 text-white font-semibold tracking-wide text-center rounded-lg shadow-lg mt-12 hover:drop-shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="w-[50%] hidden md:block px-8 bg-indigo-700 rounded-md drop-shadow-sm p-6">
        <h4 className="mb-8 text-2xl font-bold text-white">
          Login to continue
        </h4>
        <div className="">
          <img className="w-full" src="/images/auth.png" />
        </div>
      </div>
    </div>
  )
}

export default Login
