import DataEngineHero from "../../components/DataEngineHero";
// import DataEnginePartners from "../../components/DataEnginePartners"; // Removed - no partners
import BestInBusiness from "../../components/BestInBusiness";
import CaseStudies from "../../components/CaseStudies";
import PoweringFrontierAI from "../../components/PoweringFrontierAI";
import DataEngineExplained from "../../components/DataEngineExplained";
import SupportedAnnotations from "../../components/SupportedAnnotations";
import BuildAISection from "@/components/BuildAISection";
import DataEngineCTA from "../../components/DataEngineCTA";

export default function DataEnginePage() {
  return (
    <div>
      <DataEngineHero />
      {/* <DataEnginePartners /> */}{/* Removed - no partners */}
      <BestInBusiness />
      <CaseStudies />
      <PoweringFrontierAI />
      <DataEngineExplained />
      <SupportedAnnotations />
      <BuildAISection />
      <DataEngineCTA />
    </div>
  );
}
