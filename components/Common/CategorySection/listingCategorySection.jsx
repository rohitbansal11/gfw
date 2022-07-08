import React from "react";
import { Section, Container, FadeUpDown } from "@components/Common";
import { PrimaryHeading } from "../Typography";
import Cards from "./Cards";

const listingCategorySection = ({ items }) => {
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
        <Cards items={items} />
      </Container>
    </Section>
  );
};
listingCategorySection.defaultProps = {
  items: [
    {
      icon: "fa-solid:truck-loading",
      text: "Loads",
      href: "#",
      color: "bg-indigo-700",
      subCategory: [
        {
          title: "Loads",
          href: "/load-form",
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
          title: "Truck/Part Sell",
          href: "/sell-truck-parts",
        },
        {
          title: "Truck Sell",
          href: "/sell-trucks",
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
          title: "Local stores",
          href: "/local-store",
        },
        {
          title: "Local workers",
          href: "/local-workers",
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
          title: "Cars sell",
          href: "/cars",
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
          title: "Ride",
          href: "/ride-schools",
        },
        {
          title: "Old Age Ride",
          href: "/ride-old-age",
        },
        {
          title: "Airport Ride",
          href: "/ride-airport1",
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
          href: "/rent-house",
        },
        {
          title: "Rent room",
          href: "/for-rent-rooms",
        },
      ],
    },
  ],
};

export default listingCategorySection;
