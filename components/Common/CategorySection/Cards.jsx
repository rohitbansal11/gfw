import React from "react"
import Card from "./Card"

const Cards = ({ items }) => {
  return (
    <div className="flex mt-10  items-center gap-8 flex-wrap">
      {items.map((item) => (
        <Card item={item} />
      ))}
    </div>
  )
}

export default Cards
