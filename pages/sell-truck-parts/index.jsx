import React from "react";
import { BecomeMember, FormSection, MobileApp } from "@components/Common";
import SellTruckPartsForm from "@components/Common/Forms/SellTruckParts";

const SellTruckParts = () => {
  return (
    <>
      <FormSection
        title="Sell Truck Parts"
        img="/images/truck-parts-section.jpg"
        form={<SellTruckPartsForm />}
      />
      <BecomeMember />
      <MobileApp />
    </>
  );
};

export default SellTruckParts;
