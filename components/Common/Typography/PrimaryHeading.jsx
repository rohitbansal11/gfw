import React from "react"
import styled from "styled-components"

const PrimaryHeading = ({
  text,
  color,
  variant = "h1",
  textCenter,
  isBlock,
  lineHeight = "1.2em",
  marginTop,
  marginBottom = "20px",
  primary,
  secondary,
  style,
  uppercase,
  className,
}) => {
  const heading = text.split(",")
  return (
    <Heading
      style={{ ...style }}
      textCenter={textCenter}
      marginTop={marginTop}
      marginBottom={marginBottom}
      lineHeight={lineHeight}
      variant={variant}
      className={`${className}`}
    >
      {heading.map((item, index) => (
        <Span
          className={className}
          uppercase={uppercase}
          primary={primary}
          secondary={secondary}
          isBlock={isBlock}
          isPrimary={(index + 1) % 2 !== 0 ? true : false}
        >
          {item}
        </Span>
      ))}
    </Heading>
  )
}

const Heading = styled.h2`
  font-size: ${({ variant, theme: { fontSizes } }) =>
    variant && fontSizes[variant]};
  font-weight: bold;
  margin: 0px;
  line-height: ${(props) => props.lineHeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`
const Span = styled.span`
  color: ${({ isPrimary, primary, secondary, theme: { colors } }) =>
    isPrimary ? colors[primary] : colors[secondary]};
  display: ${(props) => (props.isBlock ? "block" : "inline")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "initial")};
  margin: 0px;
`

export default PrimaryHeading
