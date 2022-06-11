import React from "react"
import styled from "styled-components"

const SecondaryHeading = ({
  text,
  color,
  fontSize,
  variant,
  textCenter,
  lineHeight = "1.35em",
  marginTop,
  marginBottom = "15px",
  style,
  uppercase,
  fontWeight = "w8",
}) => {
  return (
    <Heading
      style={{ ...style }}
      textCenter={textCenter}
      marginTop={marginTop}
      marginBottom={marginBottom}
      lineHeight={lineHeight}
      variant={variant}
      color={color}
      fontSize={fontSize}
      uppercase={uppercase}
      fontWeight={fontWeight}
    >
      {text}
    </Heading>
  )
}

const Heading = styled.h3`
  font-size: ${({ variant, theme: { fontSizes } }) =>
    variant ? fontSizes[variant] : "1.4rem"};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  margin: 0px;
  line-height: ${(props) => props.lineHeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "default")};
  color: ${({ color, theme: { colors } }) => colors[color]};
  font-weight: ${({ fontWeight, theme: { fontWeights } }) =>
    fontWeights[fontWeight]};
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`

export default SecondaryHeading
