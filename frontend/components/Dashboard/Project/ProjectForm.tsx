import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const ProjectForm: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className="w-full p-4 border">
      <h3 className="font-semibold underline underline-offset-8 mb-4">
        Project Information
      </h3>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Name
        </p>
        <div className="w-full">
          <input
            type="text"
            className="input input-bordered input-sm md:input-md w-full"
            placeholder="Type your project name"
            required
            {...register("title")}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Category
        </p>
        <div className="w-full">
          <select
            className="select select-bordered select-sm md:select-md w-full font-normal"
            defaultValue=""
            required
            {...register("category")}
          >
            <option className="" value="" disabled>Select project category</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Management">Management</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Blog">Blog</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Live URL
        </p>
        <div className="w-full">
          <input
            type="text"
            className="input input-bordered w-full input-sm md:input-md"
            placeholder="Type your project name"
            required
            {...register("project_link")}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Key Features
        </p>
        <div className="w-full space-y-2">
          <input
            type="text"
            className="input input-bordered input-sm md:input-md w-full"
            placeholder="Type your project features"
            required
            {...register("features1")}
          />
          <input
            type="text"
            className="input input-bordered input-sm md:input-md w-full"
            placeholder="Type your project features"
            required
            {...register("features2")}
          />
          <input
            type="text"
            className="input input-bordered input-sm md:input-md w-full"
            placeholder="Type your project features"
            required
            {...register("features3")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
