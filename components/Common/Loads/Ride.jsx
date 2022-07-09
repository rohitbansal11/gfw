import React, { useEffect } from "react"
import { Section, PrimaryHeading } from "@components/Common"
import LoadImgCard from "./Cards/LoadImgCard"
import { useState } from "react"
import Link from "next/link"
import RentCard from "./Cards/RentCard"
import RideCard from "./Cards/RideCard"

const Ride = ({ loadsData, type }) => {
  const [loads, setLoads] = useState([])

  useEffect(() => {
    setLoads(loadsData)
  }, [loadsData])
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="
        Rides"
        textCenter
      />
      <div className="flex border-t-2 border-gray-400 pt-4 justify-center py-2 mb-6">
        <div className="flex justify-center gap-4">
          <div className="border-r-2 border-indigo-700 pr-4">
            {type === "school" ? (
              <Link href="/ride-school">
                <a>
                  <button className="bg-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium border-2 border-indigo-700">
                    School
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/ride-school">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    School
                  </button>
                </a>
              </Link>
            )}
          </div>
          <div>
            {type === "oldage" ? (
              <Link href="/ride-oldage">
                <a>
                  <button className="bg-indigo-700 border-2 border-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
                    Old Age
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/ride-oldage">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    Old Age
                  </button>
                </a>
              </Link>
            )}
          </div>
          <div>
            {type === "airport" ? (
              <Link href="/ride-airport">
                <a>
                  <button className="bg-indigo-700 border-2 border-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
                    Airport
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/ride-airport">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    Airport
                  </button>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
        {loads.map((item) => (
          <RideCard type={type} item={item} />
        ))}
      </div>
    </Section>
  )
}

export default Ride
