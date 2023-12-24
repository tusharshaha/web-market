import DashBoardLayout from "@/components/DashBoardLayout";
import PIForm from "@/components/Dashboard/Resume/PIForm";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { MdFileUpload } from "react-icons/md";

const Resume: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Resume" />
      <div className="bg-white shadow-md py-10 px-4 md:px-6 rounded-md">
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary text-white font-bold uppercase p-3 rounded-md shadow-md flex items-center justify-center gap-2">
            <MdFileUpload className="text-2xl" />
            Upload Resume
          </div>
          <div className="divider">OR</div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center justify-start gap-2 w-full px-4 sm:px-0 lg:max-w-2xl mx-auto"
          >
            <PIForm register={register} errors={errors} />
          </form>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Resume;
