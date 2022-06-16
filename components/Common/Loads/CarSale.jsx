import React, { useEffect } from "react"
import { Section, PrimaryHeading } from "@components/Common"
import { useState } from "react"
import Link from "next/link"
import CarSaleCard from "./Cards/CarSaleCard"

const TruckParts = ({ loadsData, isParts }) => {
  const [loads, setLoads] = useState([])

  useEffect(() => {
    setLoads(loadsData)
  }, [loadsData])
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Car Sale"
        textCenter
      />

      <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
        {loads.map((item) => (
          <CarSaleCard isParts={isParts} item={item} />
        ))}
      </div>
    </Section>
  )
}

export default TruckParts
