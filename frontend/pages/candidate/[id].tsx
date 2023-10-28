import CandidateTop from "@/components/Candidate/CandidateDetails/CandidateTop";
import Layout from "@/components/Layout";
import { NextPage } from "next";

const Candidate: NextPage = () => {
  return (
    <Layout
      title=""
      keywords=""
      description=""
    >
      <div className="my-14 cus-container">
        <CandidateTop />
      </div>
    </Layout>
  );
};

export default Candidate;