import DashBoardLayout from "@/components/DashBoardLayout";
import ProjectForm from "@/components/Dashboard/Project/ProjectForm";
import ProjectMedia from "@/components/Dashboard/Project/ProjectMedia";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Projects: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {});
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Projects" />
      <div className="bg-white shadow-md p-6 rounded-md">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-start gap-2 mt-5 w-full px-4 sm:px-0 sm:w-3/4 mx-auto space-y-4 pb-4"
        >
          <ProjectMedia register={register} />
          <ProjectForm register={register} errors={errors} />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary text-white px-8 py-2 rounded-full mt-2 flex items-center"
          >
            {loading && (
              <span className="w-[20px] h-[20px] border-4 border-slate-200 border-b-white rounded-full mr-2 animate-spin" />
            )}
            Upload
          </button>
        </form>
      </div>
    </DashBoardLayout>
  );
};

export default Projects;
