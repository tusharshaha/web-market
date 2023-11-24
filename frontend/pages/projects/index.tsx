import Layout from "@/components/Layout";
import FilterSection from "@/components/Project/FilterSection";
import ProjectCard from "@/components/Project/ProjectCard";
import { NextPage } from "next";

const Projects: NextPage = () => {
  const projects = new Array(15).fill(0);
  return (
    <Layout title="" keywords="" description="">
      <div className="cus-container my-14">
        <div className="flex gap-3 items-start relative">
          {/* project filter section  */}
          <div className="hidden w-1/4 md:block h-screen sticky top-0">
            <FilterSection />
          </div>
          {/* project list section  */}
          <div className="md:w-3/4 space-y-4">
            {projects.map((ele, i) => (
              <ProjectCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
