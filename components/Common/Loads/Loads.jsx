import React from "react"
import { Section, Container, PrimaryHeading } from "@components/Common"
import LoadCard from "./Cards/LoadCard"
import { ModalLoadSimple} from "@components/Common"

const Loads = ({ loads }) => {
  return (
    <Section>
      <PrimaryHeading
        primary="primary"
        secondary="secondary"
        text="Loads"
        textCenter
      />
      <ModalLoadSimple />
      <div className="flex flex-wrap justify-around gap-8 bg-indigo-100 py-[60px]">
        {loads.map((item) => (
          <LoadCard item={item} />
        ))}
      </div>
    </Section>
  )
}

export default Loads
