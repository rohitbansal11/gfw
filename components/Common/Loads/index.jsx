import React from "react"
import { Section, Container, PrimaryHeading } from "@components/Common"
import EmergencyCard from "./EmergencyCard"

const Loads = ({ loads }) => {
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Emergency, Loads"
        textCenter
      />
      {loads.map((item) => (
        <EmergencyCard item={item} />
      ))}
    </Section>
  )
}

export default Loads
