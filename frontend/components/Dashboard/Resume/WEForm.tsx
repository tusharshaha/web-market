import React, { useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const WEForm: React.FC<Props> = ({ register, setValue }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e: any) => {
    setChecked(e.target.checked);
    setValue("w_current", e.target.checked);
  };
  return (
    <div className="border p-4 w-full">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="font-semibold">Work Experience</h3>
        <span className="font-semibold">+ Add more</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Company name"
          required
          {...register("companyName")}
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="Your position"
          required
          {...register("position")}
        />
        <div>
          <p>From</p>
          <input
            type="date"
            className="input input-bordered w-full"
            required
            {...register("w_from")}
          />
        </div>
        <div>
          <div className="flex items-center justify-between gap-2">
            <p>To</p>
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
              />
              <span className="label-text">Currently working</span>
            </label>
          </div>
          <input
            type="date"
            className="input input-bordered w-full"
            disabled={checked}
            required
            {...register("w_to")}
          />
        </div>
      </div>
      <textarea
        className="textarea textarea-bordered resize-none h-[100px] w-full mt-2"
        placeholder="description..."
        required
        {...register("w_description")}
      ></textarea>
    </div>
  );
};

export default WEForm;
