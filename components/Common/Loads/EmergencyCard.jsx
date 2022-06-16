import React from "react"
import styled from "styled-components"
const EmergencyCard = ({ item }) => {
  return (
    <div className="flex">
      <div className="border-2 border-red-500">
        <div
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          className="text-[14px] "
        >
          Emergency
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <AnimatedDot />
        </div>
      </div>
    </div>
  )
}

const AnimatedDot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 100px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  :before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default EmergencyCard
