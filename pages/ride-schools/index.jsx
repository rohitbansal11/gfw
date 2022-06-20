import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"
import RideSchools from "@components/Common/Forms/rideschools"

const SellCars = () => {
  return (
    <>
      <FormSection
       title="Ride: Schools"
        img="/images/rideschools.jpg
        "
      form={<RideSchools/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default SellCars
