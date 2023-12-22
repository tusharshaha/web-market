/* eslint-disable @next/next/no-img-element */
import DashBoardLayout from "@/components/DashBoardLayout";
import SettingForm from "@/components/Dashboard/Setting/SettingForm";
import BreadCrumb from "@/components/common/BreadCrumb";
import useAuth from "@/hooks/useAuth";
import { userSettingData, userSettingSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import { z } from "zod";

const Settings: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { name, email, userImage, role, contactNumber } = useAuth();
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const user = {
    name,
    email,
    userImage,
    contactNumber,
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty },
  } = useForm<userSettingData>({
    resolver: zodResolver(userSettingSchema),
    defaultValues: user,
  });
  const passValidation = z
    .string()
    .regex(
      new RegExp(/^(?=.*[a-z])(?=.*\d).{6,}$/),
      "Password must be 6 characters with 1 letter and 1 digit."
    );

  const onSubmit = handleSubmit((data) => {
    if (data.password !== "") {
      try {
        passValidation.parse(data.password);
      } catch (error: any) {
        const err = JSON.parse(error)[0].message;
        setError("password", { message: err });
        return;
      }
    }
  });

  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Settings" />
      <div className="bg-white shadow-md p-6 rounded-md relative">
        <div className="flex items-center justify-center w-[120px] h-[120px] mx-auto relative group">
          <img
            src={imagePreview as string || userImage}
            height={100}
            width={100}
            className="w-[120px] h-[120px] rounded-full"
            alt="user image"
          />
          <label
            htmlFor="image"
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full group-hover:bg-slate-100 rounded-full opacity-80 cursor-pointer"
          >
            <FaCamera className="text-4xl text-slate-400 hidden group-hover:block" />
          </label>
          <input
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/png, image/jpeg, image/webp"
            id="image"
          />
        </div>
        <div className="bg-white border  p-1 rounded-full flex items-center gap-2 absolute top-5 right-5">
          <button
            disabled={!toggle}
            onClick={() => setToggle(!toggle)}
            className={`${
              !toggle ? "bg-slate-200" : "hover:bg-slate-100"
            } p-1 px-2 rounded-full trans`}
          >
            Candidate
          </button>
          <button
            disabled={toggle}
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle ? "bg-slate-200" : "hover:bg-slate-100"
            } p-1 px-2 rounded-full trans`}
          >
            Recruiter
          </button>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-start gap-2 mt-5 w-full px-4 sm:px-0 sm:w-2/4 mx-auto"
        >
          <SettingForm errors={errors} register={register} />

          <button
            type="submit"
            disabled={!isDirty || loading}
            className="btn btn-primary text-white px-8 py-2 rounded-full mt-2 flex items-center"
          >
            {loading && (
              <span className="w-[20px] h-[20px] border-4 border-slate-200 border-b-white rounded-full mr-2 animate-spin" />
            )}
            Update
          </button>
        </form>
      </div>
    </DashBoardLayout>
  );
};

export default Settings;
