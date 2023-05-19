import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import Layout from "@/components/Layout";
import Features from "@/components/Home/Features";

const Home: React.FC = () => {

  return (
    <Layout>
        <HeroSection></HeroSection>
        <Features></Features>
    </Layout>
  );
};

export default Home;