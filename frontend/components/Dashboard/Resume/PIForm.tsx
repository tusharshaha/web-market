import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const PIForm: React.FC<Props> = ({ register }) => {
  return (
    <div className="border p-4 w-full">
      <h3 className="font-semibold ">
        Personal Information
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <input type="text" className="input input-bordered" placeholder="Your name" />
        <input type="text" className="input input-bordered" placeholder="Your category" />
      </div>
    </div>
  );
};

export default PIForm;
