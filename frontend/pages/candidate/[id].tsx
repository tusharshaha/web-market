import CandidateInfo from "@/components/Candidate/CandidateDetails/CandidateInfo";
import CandidateTop from "@/components/Candidate/CandidateDetails/CandidateTop";
import CareerObjective from "@/components/Candidate/CandidateDetails/CareerObjective";
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
        {/* candidate top section  */}
        <CandidateTop />

        {/* candidate details section  */}
        <div className="flex items-start justify-between mt-10 gap-8">
          <div className="w-2/3">
            <CareerObjective />
          </div>
          <div className="w-1/3">
            <CandidateInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Candidate;