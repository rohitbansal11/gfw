import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const BecomeMemberCard = ({ items}) => {


  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24">
    <div className="flex flex-col items-center">
      {
        items.map((item) => (
            <Link href={item.href}>
            <div className={`xl:w-[700px] my-10 md:w-1/3 p-4 sm:ml-10 md:ml-10 sm:w-1/2  rounded-2xl hover:bg-green-400`}>
            <div className="flex flex-col mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
            <Icon color='white' height={120} icon={item.icon} />
            <h2 className="text-4xl md:text-4xl lg:text-5xl pt-3 mb-6 text-white font-extrabold title-font mb-4">{item.name}</h2>

            </div>
            </div>
            </Link>
        ))}

    </div>
  </div>
</section>
  )
}

BecomeMemberCard.defaultProps = {
    items : [
        {
            name:"Gold",
            icon:"cryptocurrency:gold",
            href:"/my-listing",
        },
        {
            name:"Silver",
            icon:"file-icons:silverstripe",
            href:"/my-listing",
        },
        {
            name:"platinum",
            icon:"fluent:diamond-24-filled",
            href:"/my-listing",
        },
    ]
}


export default BecomeMemberCard