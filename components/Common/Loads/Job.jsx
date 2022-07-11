import React, { useEffect } from "react"
import { Section, PrimaryHeading } from "@components/Common"
import { useState } from "react"
import Link from "next/link"
import JobCard from "./Cards/JobCard"
import {ModalSimple} from "@components/Common"


const Job = ({ loadsData, isWorkers }) => {
  const [loads, setLoads] = useState([])

  useEffect(() => {
    setLoads(loadsData)
  }, [loadsData])

  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Jobs"
        textCenter
      />
      <ModalSimple/>
      <div className="flex border-t-2 border-gray-400 pt-4 justify-center py-2 mb-6">
        <div className="flex justify-center gap-4">
          <div className="border-r-2 border-indigo-700 pr-4">
            {isWorkers ? (
              <Link href="/job-local-worker">
                <a>
                  <button className="bg-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium border-2 border-indigo-700">
                    Local Worker
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/job-local-worker">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    Local Worker
                  </button>
                </a>
              </Link>
            )}
          </div>
          <div>
            {isWorkers ? (
              <Link href="/job-local-stores">
                <a>
                  <button className="bg-white rounded-md shadow-md text-indigo-700 py-2 px-6 text-xl font-medium border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white">
                    Local Stores
                  </button>
                </a>
              </Link>
            ) : (
              <Link href="/job-local-stores">
                <a>
                  <button className="bg-indigo-700 border-2 border-indigo-700 rounded-md shadow-md text-white py-2 px-6 text-xl font-medium ">
                    Local Stores
                  </button>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
        {loads.map((item) => (
          <JobCard isWorkers={isWorkers} item={item} />
        ))}
      </div>
    </Section>
  )
}

export default Job
