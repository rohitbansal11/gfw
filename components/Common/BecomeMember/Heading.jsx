import React, { useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { membershipStatus } from '@store/UserListing/UserListingAction'


const Heading = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state?.listing)

    console.log("bgfhf",data?.status.sub_data)

    useEffect(() => {
      dispatch(membershipStatus(data?.status.sub_data))
    }, [])

    

  return (
    <div className='flex flex-col my-10 py-10 mx-4 bg-white rounded-md shadow-lg'>
        <h1 className="font-black md:text-5xl sm:text-3xl text-2xl lg:text-6xl text-blue-800 text-center">
            MEMBERSHIP <span className="text-orange-700"> AVAILABLE</span>{" "}
          </h1>
           <div className='flex flex-col my-10'>
            <div className='flex justify-between mx-10 md:mx-20 my-2'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-blue-600'>Current MemberShip</h1>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-green-600'>{data?.status?.sub_data?.sub_role ||" No Role"}</h1>
            </div>
            <div className='flex justify-between mx-10 md:mx-20'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-blue-600'>Status</h1>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-green-600'>{  data?.status?.sub_data?.status ? "Active" : "False"}</h1>
            </div>
            <div className='flex justify-between mx-10 md:mx-20 my-2'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-blue-600'>Expired Date</h1>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-green-600'>{moment(data?.status?.sub_data?.end ).format('MMMM Do YYYY, h:mm:ss a') || "No Subscription"}</h1>
            </div>
        </div>
    </div>
  )
}

export default Heading