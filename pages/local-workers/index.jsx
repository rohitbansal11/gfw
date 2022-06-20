import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"
import RideOldAge from "@components/Common/Forms/rideoldage"
import Localworkers from "@components/Common/Forms/localworkers"

const localworkers = () => {
  return (
    <>
      <FormSection
       title="Local Workers"
        img="/images/local-workers.jpg"
        form={<Localworkers/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default localworkers
