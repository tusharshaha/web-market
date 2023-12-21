import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
}

const ProjectMedia: React.FC<Props> = ({ register }) => {
  return (
    <div className="mb-8 flex flex-col justify-center space-y-4 items-center">
      <h3 className="uppercase font-semibold underline underline-offset-8 text-primary">
        Media
      </h3>
      <div className="w-full flex items-center gap-2">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block w-2/12">
          Thumbnail
        </p>
        <div className="w-full">
          <input
            type="file"
            className="file-input file-input-primary file-input-bordered file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("thumbnail")}
          />
        </div>
      </div>
      <div className="w-full flex items-start gap-2 justify-between">
        <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block w-2/12">
          Preview
        </p>
        <div className="w-full space-y-2">
          <input
            type="file"
            className="file-input file-input-primary file-input-bordered file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("preview1")}
          />
          <input
            type="file"
            className="file-input file-input-primary file-input-bordered file-input-sm w-full"
            required
            accept="image/png, image/jpeg, image/webp"
            {...register("preview2")}
          />
          <input
            type="file"
            className="file-input file-input-primary file-input-bordered file-input-sm w-full"
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
