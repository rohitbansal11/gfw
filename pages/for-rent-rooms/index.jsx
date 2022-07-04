import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
// import SellCarsForm from "@components/Common/Forms/cars"
import ForRentRooms from "@components/Common/Forms/forRentRooms"

const rentrooms = () => {
  return (
    <>
      <FormSection
       title="For Rent Rooms"
        img="/images/rentrooms.jpg"
      form={<ForRentRooms/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default rentrooms
