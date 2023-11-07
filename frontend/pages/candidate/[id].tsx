import CandidateInfo from "@/components/Candidate/CandidateDetails/CandidateInfo";
import CandidateTop from "@/components/Candidate/CandidateDetails/CandidateTop";
import CareerObjective from "@/components/Candidate/CandidateDetails/CareerObjective";
import Education from "@/components/Candidate/CandidateDetails/Education";
import WorkExperience from "@/components/Candidate/CandidateDetails/WorkExperience";
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
        <div className="flex items-start justify-between mt-10 gap-10">
          <div className="w-2/3 space-y-10">
            <CareerObjective />
            <WorkExperience />
            <Education />
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