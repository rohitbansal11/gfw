import React from "react";
import { Section, Container, FadeUpDown } from "@components/Common";
import { PrimaryHeading } from "../Typography";
import Cards from "./Cards";

const CategorySection = ({ items }) => {
  return (
    <Section className="bg-red-200">
      <Container>
        <FadeUpDown>
          <PrimaryHeading
            isBlock
            textCenter
            lineHeight="1em"
            primary={"primary"}
            secondary={"secondary"}
            text="One Platform, Many Solutions"
          />
        </FadeUpDown>
        <Cards items={items} type="show" />
      </Container>
    </Section>
  );
};

CategorySection.defaultProps = {
  items: [
    {
      icon: "fa-solid:truck-loading",
      text: "Loads",
      href: "#",
      color: "bg-indigo-700",
      subCategory: [
        {
          title: "Loads",
          href: "/loads",
        },
        {
          title: "Emergency Loads",
          href: "/emergency-loads",
        },
      ],
    },
    {
      icon: "fa6-solid:truck-arrow-right",
      text: "Truck & part sale",
      href: "#",
      color: "bg-red-600",
      subCategory: [
        {
          title: "Truck/Part Sale",
          href: "/truck-parts",
        },
        {
          title: "Trucks Sale",
          href: "/trucks",
        },
      ],
    },
    {
      icon: "fa-solid:suitcase",
      text: "Jobs",
      href: "#",
      color: "bg-indigo-700",
      subCategory: [
        {
          title: "Job local store",
          href: "/job-local-stores",
        },
        {
          title: "Job local workers",
          href: "/job-local-worker",
        },
      ],
    },
    {
      icon: "bxs:car",
      text: "Car Sale",
      href: "#",
      color: "bg-red-600",
      subCategory: [
        {
          title: "Cars sale",
          href: "/car-sale",
        },
      ],
    },
    {
      icon: "bxs:car",
      text: "Get Ride",
      href: "#",
      color: "bg-indigo-700",
      subCategory: [
        {
          title: "School Ride",
          href: "/ride-school",
        },
        {
          title: "Old Age Ride",
          href: "/ride-oldage",
        },
        {
          title: "Airport Ride",
          href: "/ride-airport",
        },
      ],
    },
    {
      icon: "ri:hotel-line",
      text: "Rent Room & Homes",
      href: "#",
      color: "bg-red-600",
      subCategory: [
        {
          title: "Rent Home",
          href: "/rent",
        },
        {
          title: "Rent room",
          href: "/rent-room",
        },
      ],
    },
  ],
};

export default CategorySection;
