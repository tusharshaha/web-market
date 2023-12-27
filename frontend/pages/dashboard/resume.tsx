import DashBoardLayout from "@/components/DashBoardLayout";
import EducationForm from "@/components/Dashboard/Resume/EducationForm";
import PIForm from "@/components/Dashboard/Resume/PIForm";
import WEForm from "@/components/Dashboard/Resume/WEForm";
import BreadCrumb from "@/components/common/BreadCrumb";
import useAuth from "@/hooks/useAuth";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Resume: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { name, email, userImage, role, contactNumber } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
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
            className="flex flex-col items-center justify-start gap-2 w-full px-4 sm:px-0 lg:max-w-2xl mx-auto space-y-3"
          >
            <PIForm
              register={register}
              errors={errors}
              userImage={userImage}
              control={control}
            />
            <WEForm register={register} />
            <EducationForm register={register} />
            <button
              type="submit"
              disabled={!isDirty || loading}
              className="btn btn-neutral text-white px-8 py-2 rounded-full mt-2 flex items-center"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Resume;
