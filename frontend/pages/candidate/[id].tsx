import CandidateInfo from "@/components/Candidate/CandidateDetails/CandidateInfo";
import CandidateTop from "@/components/Candidate/CandidateDetails/CandidateTop";
import CareerObjective from "@/components/Candidate/CandidateDetails/CareerObjective";
import Education from "@/components/Candidate/CandidateDetails/Education";
import Skills from "@/components/Candidate/CandidateDetails/Skills";
import WorkExperience from "@/components/Candidate/CandidateDetails/WorkExperience";
import Layout from "@/components/Layout";
import { NextPage } from "next";

const Candidate: NextPage = () => {
  return (
    <Layout title="" keywords="" description="">
      <div className="my-14 cus-container">
        {/* candidate top section  */}
        <CandidateTop />

        {/* candidate details section  */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-10 gap-10">
          <div className="lg:w-2/3 md:w-full space-y-10">
            <CareerObjective />
            <WorkExperience />
            <Education />
          </div>
          <div className="lg:w-1/3 md:w-full space-y-10">
            <CandidateInfo />
            <Skills />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Candidate;
