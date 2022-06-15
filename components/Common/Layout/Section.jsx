import React from "react"
import styled from "styled-components"
const Section = ({ children, src, overlay, className }) => {
  return (
    <Wrapper src={src} className={`py-[60px] ${className}`}>
      <div className="z-10 relative">{children}</div>
      {overlay && <Overlay />}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin: 0px;
`
const Overlay = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`

export default Section
