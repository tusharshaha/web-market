import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
}

const ObjectiveForm: React.FC<Props> = ({ register }) => {
  return (
    <div className="border p-4 w-full">
      <h3 className="font-semibold mb-4">Career Objective</h3>
      <div className="">
        <textarea
          className="textarea textarea-bordered resize-none h-[100px] w-full"
          placeholder="Career objective..."
          required
          {...register("carrerObj")}
        ></textarea>
      </div>
    </div>
  );
};

export default ObjectiveForm;
