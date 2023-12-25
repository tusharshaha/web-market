import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const PIForm: React.FC<Props> = ({ register }) => {
  return (
    <div className="border p-4 w-full">
      <h3 className="font-semibold ">Basic Information</h3>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Your name"
          required
          {...register("name")}
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Your category"
          required
          {...register("category")}
        />
        <input
          type="email"
          className="input input-bordered"
          placeholder="Your email"
          required
          {...register("email")}
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Your phone number"
          required
          {...register("contactNumber")}
        />
        <input
          type="number"
          className="input input-bordered"
          placeholder="Your years of experience"
          min={1}
          max={20}
          required
          {...register("experience")}
        />
      </div>
    </div>
  );
};

export default PIForm;
