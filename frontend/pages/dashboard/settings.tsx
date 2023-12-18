/* eslint-disable @next/next/no-img-element */
import DashBoardLayout from "@/components/DashBoardLayout";
import BreadCrumb from "@/components/common/BreadCrumb";
import useAuth from "@/hooks/useAuth";
import { userSettingData, userSettingSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Settings: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { name, email, userImage, role, contactNumber } = useAuth();
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
    formState: { errors },
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
      <div className="bg-white shadow-md p-6 rounded-md">
        <div className="flex items-center justify-center">
          <img
            src={userImage}
            height={100}
            width={100}
            className="w-[120px] h-[120px] rounded-full"
            alt="user image"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-start gap-2 mt-5 w-full px-4 sm:px-0 sm:w-2/4 mx-auto"
        >
          <div className="w-full">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
              Your name
            </p>
            <input
              type="text"
              className="input input-primary w-full"
              placeholder="type your name"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
              Your email
            </p>
            <input
              type="email"
              className="input input-primary w-full"
              placeholder="type your email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="label">Your number</p>
            <input
              type="text"
              className="input input-primary w-full"
              placeholder="type your number"
              {...register("contactNumber")}
            />
            {errors.contactNumber?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.contactNumber.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="label">Your password</p>
            <input
              type="password"
              className="input input-primary w-full"
              placeholder="type your password"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full mb-2">
            <p className="label">Confirm password</p>
            <input
              type="password"
              className="input input-primary w-full"
              placeholder="type your password"
              {...register("confirmPass")}
            />
            {errors.confirmPass?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.confirmPass.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
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
