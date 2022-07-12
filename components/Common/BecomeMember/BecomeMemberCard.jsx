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
            <div className={`xl:w-[700px] my-4 md:w-[600px] py-4 sm:ml-10 md:ml-10 sm:w-[500px] bg-orange-500  rounded-2xl hover:bg-green-400`}
            >
            <div className='flex flex-col'>
            <div className="flex flex-row justify-between sm:mx-2 lg:mx-4 mt-2 mb-0 px-10 cursor-pointer md:px-2 md:py-4 items-center">
            <Icon color='white ' height={100} icon={item.icon} />
            <h2 className="text-5xl sm:mx-4 md:text-5xl lg:text-6xl pt-3 mb-6 text-white font-extrabold title-font mb-4">{item.name}</h2>
            </div>
            <div className='lg:w-[60%] sm:w-[80%] my-3 mx-10  md:mx-auto '>
                <ol style={{listStyleType: "upper-roman" }} className='font-bold sm:md lg:text-lg text-white'>
                    <li className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dignissimos.</li>
                    <li className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dignissimos.</li>
                    <li className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dignissimos.</li>
                </ol>
            </div>
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
            name:"Silver",
            color:"bg-gray-600",
            icon:"file-icons:silverstripe",
            href:"/my-listing",
        },
        {
            name:"Gold",
            color: "bg-amber-400",
            icon:"cryptocurrency:gold",
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