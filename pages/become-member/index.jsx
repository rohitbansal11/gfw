import { BecomeMemberCard } from '@components/Common'
import React from 'react'

const index = () => {
  return (
    <>
    <div className='pt-20'>
      <h1 className='font-black text-7xl text-green-400 text-center'>MEMBERSHIP <span  className='text-orange-500'> AVAILABLE</span> </h1>
    </div>
    <BecomeMemberCard />
    </>
  )
}

export default index