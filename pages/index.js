import {
  BecomeMember,
  CategorySection,
  HomeHero,
  Navbar,
  MobileApp,
  Footer,
} from "@components/Common";
export default function Home() {
  return (
    <div>
      <HomeHero
        primaryText={"Buy or Sell, Anything"}
        secondaryText={"Find Jobs, Loads, truck and more."}
      />
      <CategorySection />
      <BecomeMember />
      <MobileApp />
    </div>
  );
}
