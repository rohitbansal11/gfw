import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import RideAirport from "@components/Common/Forms/rideAirport"

const rideoldage = () => {
  return (
    <>
      <FormSection
       title="ride Airport"
        img="/images/rideschools.jpg"
      form={<RideAirport/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default rideoldage
