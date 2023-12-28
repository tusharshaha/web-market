import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
}

const EducationForm: React.FC<Props> = ({ register }) => {
  return (
    <div className="border p-4 w-full">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="font-semibold">Education</h3>
        <span className="font-semibold">+ Add more</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Institute name"
          required
          {...register("instituteName")}
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Your degree"
          required
          {...register("degree")}
        />
        <div>
          <p>From</p>
          <input
            type="date"
            className="input input-bordered w-full"
            required
            {...register("e_from")}
          />
        </div>
        <div>
          <div className="flex items-center justify-between gap-2">
            <p>To</p>
            <label className="cursor-pointer flex items-center gap-2">
              <input type="checkbox" {...register("e_current")} />
              <span className="label-text">Currently studying</span>
            </label>
          </div>
          <input
            type="date"
            className="input input-bordered w-full"
            required
            {...register("e_to")}
          />
        </div>
      </div>
      <textarea
        className="textarea textarea-bordered resize-none h-[100px] w-full mt-2"
        placeholder="description..."
        {...register("e_description")}
      ></textarea>
    </div>
  );
};

export default EducationForm;
