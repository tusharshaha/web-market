import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import Layout from "@/components/Layout";
import Features from "@/components/Home/Features";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

const Home: React.FC = () => {

  return (
    <Layout>
        <HeroSection></HeroSection>
        <Features></Features>
        <WhyChooseUs></WhyChooseUs>
    </Layout>
  );
};

export default Home;