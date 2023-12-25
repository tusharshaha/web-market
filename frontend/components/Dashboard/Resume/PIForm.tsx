/* eslint-disable @next/next/no-img-element */
import ImagePreview from "@/components/common/ImagePreview";
import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  userImage: string;
}

const PIForm: React.FC<Props> = ({ register, userImage }) => {
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
      <h3 className="font-semibold mb-4">Basic Information</h3>
      <div className="flex items-start gap-3">
        <ImagePreview
          className="w-100 h-100"
          userImage={userImage}
          imagePreview={imagePreview}
          handleImageChange={handleImageChange}
        />
        <div className="grid grid-cols-2 gap-2 flex-grow">
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
    </div>
  );
};

export default PIForm;
