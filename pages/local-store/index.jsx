import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"
import RideOldAge from "@components/Common/Forms/rideoldage"
import Localstore from "@components/Common/Forms/localStore"

const localstore = () => {
  return (
    <>
      <FormSection
       title="Local Workers"
        img="/images/local-workers.jpg"
        form={<Localstore/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default localstore
