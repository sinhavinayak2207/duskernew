import NewHero from "../components/NewHero";
// import PartnersSection from "../components/PartnersSection"; // Removed - no partners
import EnterpriseFullStack from "../components/EnterpriseFullStack";
import AgenticSolutionsSlider from "../components/AgenticSolutionsSlider";
// import ResearchCardsSlider from "../components/ResearchCardsSlider"; // Removed - no partners/research
import BuildAISection from "../components/BuildAISection";
// import PartnersShowcase from "../components/PartnersShowcase"; // Removed - no partners
import CustomersSection from "../components/CustomersSection";

export default function Home() {
  return (
    <div>
      <NewHero />
      {/* <PartnersSection /> */}{/* Removed - no partners */}
      <EnterpriseFullStack />
      <AgenticSolutionsSlider />
      {/* <ResearchCardsSlider /> */}{/* Removed - no partners/research */}
      <BuildAISection />
      {/* <PartnersShowcase /> */}{/* Removed - no partners */}
      <CustomersSection />
    </div>
  );
}
