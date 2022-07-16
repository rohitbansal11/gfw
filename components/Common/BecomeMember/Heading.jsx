import React from 'react'
import moment from 'moment'

const Heading = () => {
  return (
    <div className='flex flex-col my-10 py-10 mx-4 bg-white rounded-md shadow-lg'>
        <h1 className="font-black md:text-5xl sm:text-3xl text-2xl lg:text-6xl text-blue-800 text-center">
            MEMBERSHIP <span className="text-orange-700"> AVAILABLE</span>{" "}
          </h1>
        <div className='flex flex-col my-10'>
            <div className='flex justify-between mx-10 md:mx-20 my-2'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-blue-600'>Current MemberShip</h1>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-green-600'>Silver</h1>
            </div>
            <div className='flex justify-between mx-10 md:mx-20'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-blue-600'>Status</h1>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-green-600'>Active</h1>
            </div>
            <div className='flex justify-between mx-10 md:mx-20 my-2'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-blue-600'>Expired Date</h1>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-green-600'>{moment().format("MMM Do YY")}</h1>
            </div>
        </div>
    </div>
  )
}

export default Heading