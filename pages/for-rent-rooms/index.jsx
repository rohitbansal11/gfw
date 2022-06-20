import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"

const rentrooms = () => {
  return (
    <>
      <FormSection
       title="For Rent Rooms"
        img="/images/rentrooms.jpg"
      form={<SellCarsForm/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default rentrooms
