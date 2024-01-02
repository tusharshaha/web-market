import { NextPage } from "next";
import Layout from "@/components/Layout";
import Category from "@/components/Home/Category";
import JobCirculars from "@/components/Home/JobCirculars";
import HowItWork from "@/components/Home/HowItWork";
import DownloadApp from "@/components/Home/DownloadApp";
import BestCandidate from "@/components/Home/BestCandiate";
import Subscribe from "@/components/Home/Subscribe";

const Home: NextPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <Category></Category>
      <JobCirculars></JobCirculars>
      <HowItWork></HowItWork>
      <DownloadApp></DownloadApp>
      <BestCandidate></BestCandidate>
      <Subscribe></Subscribe>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = (context) => {
  return { props: { token: context.req.cookies } };
};
