/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaImage } from "react-icons/fa";

interface Props {
  className: string;
  imagePreview: string | ArrayBuffer | null;
  userImage: string;
  handleImageChange: (e: any) => Promise<string | undefined>;
}

const ImagePreview: React.FC<Props> = ({
  className,
  imagePreview,
  userImage,
  handleImageChange,
}) => {
  return (
    <div className={`${className} flex items-center justify-center mx-auto relative group`}>
      <img
        src={(imagePreview as string) || userImage}
        height={100}
        width={100}
        className={className}
        alt="user image"
      />
      <label
        htmlFor="image"
        className={`${className} w-full h-full absolute top-0 left-0 flex items-center justify-center group-hover:bg-slate-100 opacity-80 cursor-pointer`}
      >
        <FaImage className="text-4xl text-slate-400 hidden group-hover:block" />
      </label>
      <input
        type="file"
        className="hidden"
        onChange={handleImageChange}
        accept="image/png, image/jpeg, image/webp"
        id="image"
      />
    </div>
  );
};

export default ImagePreview;
