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
  import { useEffect } from "react"
  import Link from "next/link"
  import { ListingCategorySection } from "@components/Common"
  export default function Home() {
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(loginUser())
    }, [])
    return (
      <div>
        <Link href="/ride-schools">
          <a className="px-6 py-2 rounded-md shadow-md bg-green-400 text-xl">
            Shool Ride
          </a>
        </Link>
        <HomeHero
          primaryText={"Buy or Sell, Anything"}
          secondaryText={"Find Jobs, Loads, truck and more."}
        />
        <ListingCategorySection />
        <BecomeMember />
        <MobileApp />
      </div>
    )
  }
  