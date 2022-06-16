import React from "react"
import { Section, Container, PrimaryHeading } from "@components/Common"
import EmergencyCard from "./Cards/EmergencyCard"

const EmergencyLoads = ({ loads }) => {
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Emergency, Loads"
        textCenter
      />
      <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
        {loads.map((item) => (
          <EmergencyCard item={item} />
        ))}
      </div>
    </Section>
  )
}

export default EmergencyLoads
