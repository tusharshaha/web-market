import Layout from "@/components/Layout";
import CandidateCard from "@/components/Candidate/CandidateCard";
import { NextPage } from "next";
import FilterSection from "@/components/Candidate/FilterSection";

const Candidate: NextPage = () => {
  const candidates = new Array(12).fill(0);
  return (
    <Layout title="" keywords="" description="">
      <div className="cus-container my-14">
        <div className="flex items-start gap-6 relative">
          {/* filter section  */}
          <div className="w-1/3 hidden md:block h-full sticky top-0">
            <FilterSection />
          </div>
          {/* candidate list section  */}
          <div className="md:w-2/3 space-y-4">
            {candidates.map((ele, i) => (
              <CandidateCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Candidate;
