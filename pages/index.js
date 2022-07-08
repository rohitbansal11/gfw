import {
  BecomeMember,
  CategorySection,
  HomeHero,
  Navbar,
  MobileApp,
  Footer,
} from "@components/Common"
import { useDispatch } from "react-redux"
import { loginUser } from "@store/user-store/userActions"
import { useEffect, useState } from "react"
import Link from "next/link"
import Login from "./login"
export default function Home() {
  const dispatch = useDispatch()

  

  useEffect(() => {
    // dispatch(loginUser())
  }, [])
  return (
    <div>
      <HomeHero
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <CategorySection />
      <BecomeMember />
      <MobileApp />
    </div>
  )
}
