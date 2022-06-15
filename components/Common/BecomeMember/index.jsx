import React from "react"
import { Section, Container } from "@components/Common"
import { PrimaryHeading } from "../Typography"
import { BsCheck2All } from "react-icons/bs"
import Image from "next/image"

const BecomeMember = () => {
  return (
    <Section className="bg-indigo-600 py-[30px]">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mr-[30px]">
            <PrimaryHeading
              variant="h2"
              primary={"white"}
              secondary={"secondary"}
              text={`Become a, Member Now, to Avail this Feature `}
            />
            <Image src={`/images/gudguru-member.png`} width={300} height={80} />
            <div className="bg-white py-4 px-2 rounded-lg shadow-lg border-2 border-red-600 max-w-[350px]">
              {["Get Full Access", "Unlimited Listings", "Unlimited Views"].map(
                (item) => (
                  <div className="flex pl-4 gap-4 text-xl font-semibold items-center">
                    <BsCheck2All size={24} className="text-indigo-900" />
                    <div>{item}</div>
                  </div>
                )
              )}
            </div>
            <div className="bg-white cursor-pointer py-2 w-[300px] flex justify-center items-center shadow-md rounded-xl mt-8 text-indigo-700 hover:translate-y-[-4px] hover:shadow-xl transition ease-in-out ">
              Book Now
            </div>
          </div>
          <div className="flex-1 my-[-30px] mt-4 md:mt-0 max-w-[500px]">
            <img src={`/images/become-member.svg`} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default BecomeMember
