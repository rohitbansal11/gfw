import { BecomeMember, FormSection, Loads, MobileApp } from '@components/Common'
import Load from '@components/Common/Forms/Load'
import React from 'react'

const load = () => {
  return (
    <>
    <FormSection title="Load"
    img="/images/rideoldage.jpg"
    form={<Load />}
    />
    <BecomeMember />
    <MobileApp />
  </>
  )
}

export default load