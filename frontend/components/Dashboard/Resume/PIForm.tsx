/* eslint-disable @next/next/no-img-element */
import ImagePreview from "@/components/common/ImagePreview";
import { languageOptions } from "@/utils/selectOptions";
import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  userImage: string;
}

const PIForm: React.FC<Props> = ({ register, userImage, control }) => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (file?.size > 1000000) {
      return toast.error("Image should be less than 1MB", {
        id: "file_error",
      });
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="border p-4 w-full">
      <h3 className="font-semibold mb-4">Personal Information</h3>
      <div className="flex items-end flex-col md:flex-row gap-3">
        <div className="w-[100px] mx-auto">
          <ImagePreview
            className="w-[100px] h-[100px]"
            userImage={userImage}
            imagePreview={imagePreview}
            handleImageChange={handleImageChange}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-2 w-full md:flex-grow">
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
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-2 mt-2">
        <input
          type="number"
          className="input input-bordered"
          placeholder="Your years of experience"
          min={1}
          max={20}
          required
          {...register("experience")}
        />
        <div className="flex items-center gap-2">
          <div className="flex-grow relative">
            <input
              type="number"
              className="input input-bordered w-full ps-8"
              placeholder="salary"
              min={1}
              required
              {...register("salary")}
            />
            <span className="text-slate-400 absolute top-[12px] left-[13px]">
              &#36;
            </span>
          </div>
          <select
            className="select select-md select-bordered font-normal"
            {...register("payment")}
          >
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annual">Annual</option>
          </select>
        </div>
        <select className="select select-md select-bordered tracking-widest font-normal">
          <option disabled value="">
            Your Age
          </option>
          <option value="15-20">15-20</option>
          <option value="20-25">20-25</option>
          <option value="25-30">25-30</option>
          <option value="30-35">30-35</option>
          <option value="35-40">35-40</option>
        </select>
        <select className="select select-md select-bordered font-normal">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Custom">Custom</option>
        </select>
      </div>
      <div className="mt-2">
        <Controller
          name="language"
          control={control}
          defaultValue={[]} // Set a default value if needed
          rules={{
            required: "This field is required",
          }}
          render={({ field }) => (
            <Select
              isMulti
              required
              placeholder="Select language..."
              {...field}
              options={languageOptions}
              onChange={(value) => {
                field.onChange(value);
              }}
              isOptionDisabled={() => field.value.length >= 3}
              styles={{
                menu: (provided) => ({
                  ...provided,
                  maxWidth: "250px",
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: "200px",
                }),
                control: (provided, state) => ({
                  ...provided,
                  border: "1px solid lightgray",
                  borderRadius: "0.375rem",
                  paddingLeft: "5px",
                  textTransform: "capitalize",
                  minHeight: "3rem",
                  ":hover": {
                    border: "1px solid lightgray",
                    boxShadow: "lightgray 0px 0px 0px 1px",
                  },
                  boxShadow: state.isFocused
                    ? "lightgray 0px 0px 0px 1px"
                    : "none",
                }),
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default PIForm;
