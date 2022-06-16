import React, { useEffect } from "react"
import { Section, Container, PrimaryHeading } from "@components/Common"
import LoadImgCard from "./Cards/LoadImgCard"
import { useState } from "react"

const TruckParts = ({ loadsData }) => {
  const [loads, setLoads] = useState([])

  useEffect(() => {
    setLoads(loadsData)
  }, [loadsData])
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Truck/Part Sale"
        textCenter
      />
      <div className="flex bg-indigo-200 justify-center py-2 mb-6">
        <div className="flex justify-center gap-4">
          <div className="border-r-2 border-indigo-400 pr-4">
            <button className="bg-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
              Trucks
            </button>
          </div>
          <div>
            <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium">
              Parts
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
        {loads.map((item) => (
          <LoadImgCard item={item} />
        ))}
      </div>
    </Section>
  )
}

export default TruckParts
