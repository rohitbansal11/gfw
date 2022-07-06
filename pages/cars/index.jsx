import React from "react"
import { BecomeMember, MobileApp, FormSection } from "@components/Common"
import SellCarsForm from "@components/Common/Forms/cars"

const SellCars = () => {
  return (
    <>
      <FormSection
       title="Sale Car"
        img="/images/cars_forms.jpg"
      form={<SellCarsForm/>}
      />
      <BecomeMember />
      <MobileApp />
    </>
  )
}

export default SellCars
