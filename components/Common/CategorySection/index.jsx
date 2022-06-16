import React from "react"
import { Section, Container } from "@components/Common"
import { Icon } from "@iconify/react"
import { PrimaryHeading } from "../Typography"
import Cards from "./Cards"

const CategorySection = ({ items }) => {
  return (
    <Section className="bg-red-200">
      <Container>
        <PrimaryHeading
          isBlock
          textCenter
          lineHeight="1em"
          primary={"primary"}
          secondary={"secondary"}
          text="One Platform, Many Solutions"
        />
        <Cards items={items} />
      </Container>
    </Section>
  )
}

CategorySection.defaultProps = {
  items: [
    {
      icon: "fa-solid:truck-loading",
      text: "Loads",
      href: "/loads",
      color: "bg-indigo-700",
    },
    {
      icon: "fa6-solid:truck-arrow-right",
      text: "Truck & part sale",
      href: "/truck-part-sale",
      color: "bg-red-600",
    },
    {
      icon: "fa-solid:suitcase",
      text: "Jobs",
      href: "/jobs",
      color: "bg-indigo-700",
    },
    {
      icon: "bxs:car",
      text: "Car Sale",
      href: "/car-sale",
      color: "bg-red-600",
    },
    {
      icon: "bxs:car",
      text: "Get Ride",
      href: "/get-ride",
      color: "bg-indigo-700",
    },
    {
      icon: "ri:hotel-line",
      text: "Rent Room & Homes",
      href: "/rent-room-home",
      color: "bg-red-600",
    },
  ],
}

export default CategorySection
