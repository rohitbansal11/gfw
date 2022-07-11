import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ items, type }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="flex mt-12 items-center gap-8 justify-evenly flex-wrap"
      onClick={() => setActive(true)}
    >
      {items.map((item, index) => (
        <Card
          onClick={() => setActive(!item)}
          item={item}
          index={index}
          type={type}
        />
      ))}
    </div>
  );
};

export default Cards;
