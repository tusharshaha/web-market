import CandidateInfo from "@/components/Candidate/CandidateDetails/CandidateInfo";
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
        {/* candidate top section  */}
        <CandidateTop />

        {/* candidate details section  */}
        <div className="flex items-start justify-between mt-6 gap-6">
          <div>

          </div>
          <div>
            <CandidateInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Candidate;