import {
  BecomeMember,
  CategorySection,
  HomeHero,
  Navbar,
  MobileApp,
  Footer,
} from "@components/Common"
import styled from "styled-components"

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <CategorySection />
      <BecomeMember />
      <MobileApp />
      <Footer />
    </div>
  )
}
