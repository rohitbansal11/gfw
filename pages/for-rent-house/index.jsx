import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"
import RentHouse from "@components/Common/Forms/ForRentHouse"

const Forrenthouse = () => {
  return (
    <>
      <FormSection
       title="For Rent-House"
        img="/images/rent-house.jpg"
      form={<RentHouse/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default Forrenthouse
