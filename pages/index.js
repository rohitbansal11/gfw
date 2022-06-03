import { Navbar } from "@components/Common"
import styled from "styled-components"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading>Next.js</Heading>
    </div>
  )
}

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`
