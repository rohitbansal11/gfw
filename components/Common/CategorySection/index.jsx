import React from "react"
import { Section, Container } from "@components/Common"
import { Icon } from "@iconify/react"
import { PrimaryHeading } from "../Typography"

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
        <div className="flex mt-10  items-center gap-8 flex-wrap">
          {items.map((item) => (
            <div className=" w-[30%] min-w-[300px] mx-auto rounded-md shadow-md bg-white">
              <div
                style={{
                  backgroundImage: `url(${`/images/card-overlay.png`})`,
                }}
                className={`p-4 bg- py-10 flex justify-center items-center ${item.color} rounded-t-md`}
              >
                <Icon height={120} icon={item.icon} color="white" />
              </div>
              <p className="py-2 px-2 text-lg lg:text-xl font-semibold text-center">
                Loads
              </p>
            </div>
          ))}
        </div>
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
