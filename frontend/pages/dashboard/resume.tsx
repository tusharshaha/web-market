import DashBoardLayout from "@/components/DashBoardLayout";
import PIForm from "@/components/Dashboard/Resume/PIForm";
import BreadCrumb from "@/components/common/BreadCrumb";
import useAuth from "@/hooks/useAuth";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";

const Resume: NextPage = () => {
  const { name, email, userImage, role, contactNumber } = useAuth();
  const {
    register,
    handleSubmit,
    control,
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
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center justify-start gap-2 w-full px-4 sm:px-0 lg:max-w-2xl mx-auto space-y-2"
          >
            <PIForm
              register={register}
              errors={errors}
              userImage={userImage}
              control={control}
            />
          </form>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Resume;
