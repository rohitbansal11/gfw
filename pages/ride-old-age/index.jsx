import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"
import RideOldAge from "@components/Common/Forms/rideoldage"

const rideoldage = () => {
  return (
    <>
      <FormSection
       title="ride: Old Age"
        img="/images/rideoldage.jpg"
      form={<RideOldAge/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default rideoldage
