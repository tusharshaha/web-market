import React from "react";
import Layout from "@/components/Layout";

import Category from "@/components/Home/Category";
import JobCirculars from "@/components/Home/JobCirculars";
import HowItWork from "@/components/Home/HowItWork";
import HeroSection from "@/components/Home/HeroSection";
import DownloadApp from "@/components/Home/DownloadApp";

const Home: React.FC = () => {

  return (
    <Layout>
      <Category></Category>
      <JobCirculars></JobCirculars>
      <HowItWork></HowItWork>
      <DownloadApp></DownloadApp>
    </Layout>
  );
};

export default Home;