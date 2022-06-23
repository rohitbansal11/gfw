import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"
import RentHouse from "@components/Common/Forms/ForSaleHouse"

const ForSaleHouse = () => {
  return (
    <>
      <FormSection
       title="For Sale-House"
        img="/images/rent-house.jpg"
      form={<RentHouse/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default ForSaleHouse
