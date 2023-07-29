import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import Layout from "@/components/Layout";
import Features from "@/components/Home/Features";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import QustionSection from "@/components/Home/QustionSection";
import NewsBlog from "@/components/Home/NewsBlog";

const Home: React.FC = () => {

  return (
    <Layout>
      <HeroSection></HeroSection>
      <Features></Features>
      <WhyChooseUs></WhyChooseUs>
      <NewsBlog></NewsBlog>
      <QustionSection></QustionSection>
    </Layout>
  );
};

export default Home;