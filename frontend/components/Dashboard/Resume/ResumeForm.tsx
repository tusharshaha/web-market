import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const ResumeForm: React.FC<Props> = ({ register }) => {
  return (
    <>
      <div className="w-full flex items-center gap-4">
        <div className="w-full">
          <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
            Your Name
          </p>
          <div className="w-full">
            <input
              type="text"
              className="input input-primary input-sm md:input-md w-full"
              placeholder="Type your project name"
              required
              {...register("name")}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
            Keyword
          </p>
          <div className="w-full">
            <input
              type="text"
              className="input input-primary input-sm md:input-md w-full"
              placeholder="Type your project name"
              required
              {...register("keyword")}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center w-full">
        <div className="w-full">
          <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
            Age
          </p>
          <div className="w-full">
            <select
              className="select select-primary select-sm md:select-md w-full font-normal"
              defaultValue=""
              required
              {...register("age")}
            >
              <option className="" value="" disabled>
                Select your age
              </option>
              <option value="15-20">15-20</option>
              <option value="20-25">20-25</option>
              <option value="25-30">25-30</option>
              <option value="30-35">30-35</option>
              <option value="35-40">35-40</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
            Gender
          </p>
          <select
            className="select select-primary select-sm md:select-md w-full font-normal"
            required
            {...register("Gender")}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Experience
        </p>
        <div className="w-full">
          <input
            type="number"
            className="input input-primary input-sm md:input-md w-full"
            placeholder="Your Experience"
            min={1}
            max={20}
            required
            {...register("experience")}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Address
        </p>
        <div className="w-full">
          <input
            type="text"
            className="input input-primary w-full input-sm md:input-md"
            placeholder="Type your project name"
            required
            {...register("project_link")}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeForm;
