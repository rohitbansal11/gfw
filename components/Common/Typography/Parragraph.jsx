import React from "react"
import styled from "styled-components"

const Parragraph = ({
  text,
  color,
  variant,
  lineHeight,
  marginTop,
  marginBottom = "30px",
  textCenter,
  centerBP = "md",
  weight,
}) => {
  return (
    <ParragraphComponent
      weight={weight}
      centerBP={centerBP}
      marginTop={marginTop}
      marginBottom={marginBottom}
      lineHeight={lineHeight}
      color={color}
      variant={variant}
      textCenter={textCenter}
    >
      {text}
    </ParragraphComponent>
  )
}

const ParragraphComponent = styled.p`
  font-size: ${({ variant, theme: { fontSizes } }) =>
    variant ? fontSizes[variant] : "18px"};
  color: ${({ color, theme: { colors } }) =>
    color ? colors[color] : colors.black};
  line-height: ${(props) => props.lineHeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
  font-weight: ${({ weight, theme: { fontWeights } }) => fontWeights[weight]};
  @media only screen and (max-width: ${({ centerBP }) =>
      centerBP === "md" ? "1000px" : centerBP === "sm" && "500px"}) {
    text-align: center;
  }
`
export default Parragraph
