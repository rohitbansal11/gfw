import React from "react"
import Card from "./Card"

const Cards = ({ items }) => {
  return (
    <div className="flex mt-12  items-center gap-8 justify-evenly flex-wrap">
      {items.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </div>
  )
}

export default Cards
