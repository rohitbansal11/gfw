import { Aside, MyListingCard } from "@components/Common"
import React from "react"

const Dashboard = () => {
  return (
    <div className="bg-indigo-50 py-8 flex">
      <div>
        <Aside />
      </div>
      <div className="flex flex-wrap items-center justify-between w-[90%] sm:w-[80%] mx-auto ">
        <div className="flex flex-wrap max-w-[1000px] mx-auto">
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
          <MyListingCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
