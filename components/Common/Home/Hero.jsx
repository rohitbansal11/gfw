import React from "react"
import {
  Section,
  Container,
  SearchBar,
  CategorySection,
} from "@components/Common"
import { PrimaryHeading, SecondaryHeading } from "../Typography"
const Hero = () => {
  return (
    <Section src="/images/home-hero.jpg">
      <Container>
        <div className="flex">
          <div>
            <PrimaryHeading
              primary={"primary"}
              secondary={"secondary"}
              text={"Buy or Sell, Anything"}
              marginBottom={"10px"}
            />
            <h3 className="text-2xl font-medium lg:text-3xl">
              Find Jobs, Loads, truck and more.
            </h3>
          </div>
          <div></div>
        </div>
        <SearchBar />
      </Container>
    </Section>
  )
}

export default Hero
