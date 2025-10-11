import React from "react";
import Layout from "@/component/Layout";
import CustomerSuccess from "./CustomerSuccess";
import Excellence from "./Excellence";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import KmcDifference from "./KmcDifference";
import LocationSection from "./LocationSection";
import PartnerSolution from "./PartnerSolution";
import PremiumWorkspaces from "./PremiumWorkspaces";
import PricingSection from "./PricingSection";
import SectionPartnerCards from "./SectionPartnerCards";
import SecurityCTA from "./SecurityCTA";
import SecuritySection from "./SecuritySection";
import TalentStrategy from "./TalentStrategy";
import TeamSpaces from "./TeamSpaces";
import TransformBusiness from "./TransformBusiness";
import WhyKMC from "./WhyKMC";

const FinalHome = ({}) => {
  return (
    <>
    <Layout>
      <HeroSection />
      <PartnerSolution />
      <PricingSection />
      <WhyKMC />
      <KmcDifference />
      <SectionPartnerCards />
      <PremiumWorkspaces />
      <LocationSection />
      <TeamSpaces />
      <SecuritySection />
      <SecurityCTA />
      <CustomerSuccess />
      <TalentStrategy />
      <Excellence />
      <FAQSection />
      <TransformBusiness />
      </Layout>
    </>
  );
};

export default FinalHome;