import React from "react"
import {
  Section,
  Container,
  SearchBar,
  CategorySection,
} from "@components/Common"
import { PrimaryHeading, SecondaryHeading } from "../Typography"
const Hero = ({
  primaryText = "primary, heading",
  secondaryText,
  src = "/images/home-hero.jpg",
  reverse,
}) => {
  return (
    <Section src={src}>
      <Container>
        <div className="flex">
          <div className={`${reverse ? "order-2" : "order-1"} flex-1`}>
            <PrimaryHeading
              primary={"primary"}
              secondary={"secondary"}
              text={primaryText}
              marginBottom={"10px"}
            />

            <h3 className="text-2xl font-medium lg:text-3xl">
              {secondaryText}
            </h3>
          </div>
          <div
            className={`${reverse ? "order-1" : "order-2"} flex-[0] lg:flex-1`}
          ></div>
        </div>
        <SearchBar />
      </Container>
    </Section>
  )
}

export default Hero
