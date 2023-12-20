import DashBoardLayout from "@/components/DashBoardLayout";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";

const Projects: NextPage = () => {
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
          className="flex flex-col items-center justify-start gap-2 mt-5 w-full px-4 sm:px-0 sm:w-3/4 mx-auto space-y-4"
        >
          <div className="w-full flex items-start gap-2 justify-between">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block w-2/12">
              Name
            </p>
            <div className="w-full">
              <input
                type="text"
                className="input input-primary w-full"
                placeholder="Type your project name"
                required
                {...register("title")}
              />
              {errors.name?.message && (
                <p className="text-sm text-error mb-2 text-left">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-start gap-2 justify-between">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block w-2/12">
              Category
            </p>
            <div className="w-full">
              <select className="select select-primary w-full" required>
                <option value="">E-Commerce</option>
                <option value="">Management</option>
                <option value="">Portfolio</option>
                <option value="">Blog</option>
              </select>
              {errors.name?.message && (
                <p className="text-sm text-error mb-2 text-left">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-start gap-2 justify-between">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block w-2/12">
              Live URL
            </p>
            <div className="w-full">
              <input
                type="text"
                className="input input-primary w-full"
                placeholder="Type your project name"
                required
                {...register("project_link")}
              />
              {errors.name?.message && (
                <p className="text-sm text-error mb-2 text-left">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex items-start gap-2 justify-between">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block w-2/12">
              Key Features
            </p>
            <div className="w-full space-y-2">
              <input
                type="text"
                className="input input-primary w-full"
                placeholder="Type your project features"
                required
                {...register("features1")}
              />
              <input
                type="text"
                className="input input-primary w-full"
                placeholder="Type your project features"
                required
                {...register("features2")}
              />
              <input
                type="text"
                className="input input-primary w-full"
                placeholder="Type your project features"
                required
                {...register("features3")}
              />
            </div>
          </div>
        </form>
      </div>
    </DashBoardLayout>
  );
};

export default Projects;
