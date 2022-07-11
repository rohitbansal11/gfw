import { Aside, DashboardList } from "@components/Common"
import React from "react"

const Dashboard = () => {
  return (
    <div className="bg-indigo-50 py-8 w-[100%] flex flex-row">
      <div className="flex w-[20%]">
        <Aside />
      </div>
      <div className="flex flex-[80%] ">
        <div className="flex ">
          <DashboardList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
