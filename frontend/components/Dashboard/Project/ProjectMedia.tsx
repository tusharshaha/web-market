import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
}

const ProjectMedia: React.FC<Props> = ({ register }) => {
  return (
    <div className="mb-8 w-full p-4 border">
      <h3 className="font-semibold underline underline-offset-8 mb-4">
        Media
      </h3>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Thumbnail
        </p>
        <div className="w-full">
          <input
            type="file"
            className="file-input file-input-bordered file-input-xs md:file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("thumbnail")}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
          Preview
        </p>
        <div className="w-full space-y-2">
          <input
            type="file"
            className="file-input file-input-bordered file-input-xs md:file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("preview1")}
          />
          <input
            type="file"
            className="file-input file-input-bordered file-input-xs md:file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("preview2")}
          />
          <input
            type="file"
            className="file-input file-input-bordered file-input-xs md:file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("preview3")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectMedia;
