import React from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { FadeUpDown } from ".."
const Card = ({ item, index }) => {
  return (
    <FadeUpDown delay={index * 0.2}>
      <Link href={item.href}>
        <div className=" w-[30%] min-w-[300px] mx-auto rounded-md shadow-md bg-white hover:translate-y-[-4px] transition ease-in-out cursor-pointer">
          <div
            style={{
              backgroundImage: `url(${`/images/card-overlay.png`})`,
            }}
            className={`p-4 bg- py-10 flex justify-center items-center ${item.color} rounded-t-md`}
          >
            <Icon height={120} icon={item.icon} color="white" />
          </div>
          <p className="py-2 px-2 text-lg lg:text-xl font-semibold text-center">
            {item.text}
          </p>
        </div>
      </Link>
    </FadeUpDown>
  )
}

export default Card
