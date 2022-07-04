import React, { useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { FadeUpDown } from ".."
const Card = ({ item, index }) => {
  const [active, setActive] = useState(null)
  return (
    <div className="relative">
      <FadeUpDown delay={index * 0.2}>
        <div onClick={() => setActive(item.text)}>
          <div className=" w-[33%] min-w-[320px] mx-auto rounded-md shadow-md bg-white hover:translate-y-[-4px] transition ease-in-out cursor-pointer">
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
        </div>
      </FadeUpDown>

      {item?.subCategory && active === item.text ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-100 px-4 flex justify-center flex-col gap-y-4">
          <Link
            href={item.subCategory[0]?.href ? item.subCategory[0]?.href : "/"}
          >
            <div className="h-[40px] border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white cursor-pointer flex rounded-md px-4 py-2 justify-center items-center">
              <a className="text-xl font-semibold tracking-wide">
                {item.subCategory[0]?.title}
              </a>
            </div>
          </Link>
          <Link
            href={item.subCategory[1]?.href ? item.subCategory[1]?.href : "/"}
          >
            <div className="h-[40px] border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white cursor-pointer flex rounded-md px-4 py-2 justify-center items-center">
              <a className="text-xl font-semibold tracking-wide">
                {item.subCategory[1]?.title}
              </a>
            </div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Card
