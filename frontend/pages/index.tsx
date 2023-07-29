import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import Layout from "@/components/Layout";
import Features from "@/components/Home/Features";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import QustionSection from "@/components/Home/QustionSection";
import NewsBlog from "@/components/Home/NewsBlog";
import Category from "@/components/Home/Category";
import JobCirculars from "@/components/Home/JobCirculars";
import HowItWork from "@/components/Home/HowItWork";

const Home: React.FC = () => {

  return (
    <Layout>
      <HeroSection></HeroSection>
      <Category></Category>
      <JobCirculars></JobCirculars>
      <HowItWork></HowItWork>
      <Features></Features>
      <WhyChooseUs></WhyChooseUs>
      <NewsBlog></NewsBlog>
      <QustionSection></QustionSection>
    </Layout>
  );
};

export default Home;