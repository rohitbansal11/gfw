import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const DashboardList = ({ items}) => {


  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-10">
    <div class="flex flex-wrap">
      {
        items.map((item) => (
            <Link href={item.href}>
            <div class="xl:w-[500px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 bg-indigo-600 sm:w-1/2  rounded-2xl hover:bg-green-400">
            <div class="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
            <Icon color='white' height={40} icon={item.icon} />
            <h2 class="text-4xl md:text-4xl lg:text-5xl pt-3 mb-6 text-white font-extrabold title-font mb-4">{item.name}</h2>
            <div class="leading-relaxed text-bold text-lg bg-white border-2 rounded-full px-3.5 py-1">{item.number}</div>
            </div>
            </div>
            </Link>
        ))}

    </div>
  </div>
</section>
  )
}

DashboardList.defaultProps = {
    items : [
        {
            name:"Loads",
            icon:"fa-solid:truck-loading",
            href:"/my-listing",
            number:"4",
        },
        {
            name:"Emergency Loads",
            icon:"fa-solid:truck-loading",
            href:"/my-listing",
            number:"4",
        },
        {
            name:"Truck Sale",
            icon:"fa6-solid:truck-arrow-right",
            href:"/my-listing",
            number:"5",
        },
        {
            name:"Truck Parts Sale",
            icon:"fa6-solid:truck-arrow-right",
            href:"/my-listing",
            number:"5",
        },
        {
            name:"School Ride",
            icon:"bxs:car",
            href:"/my-listing",
            number:"6",
        },
        {
            name:"Oldage Ride",
            icon:"bxs:car",
            href:"/my-listing",
            number:"6",
        },
        {
            name:"Airport Ride",
            icon:"bxs:car",
            href:"/my-listing",
            number:"6",
        },
        {
            name:"local Stores",
            icon:"fa-solid:suitcase",
            href:"/my-listing",
            number:"7",
        },
        {
            name:"local Workers",
            icon:"fa-solid:suitcase",
            href:"/my-listing",
            number:"7",
        },
        {
            name:"Home Rent",
            icon:"ri:hotel-line",
            href:"/my-listing",
            number:"8",
        },
        {
            name:"Room Rent",
            icon:"ri:hotel-line",
            href:"/my-listing",
            number:"8",
        },
    ]
}

export default DashboardList