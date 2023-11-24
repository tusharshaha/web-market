import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa";

const BlogCard: React.FC = () => {
  return (
    <div className="rounded-md border trans hover:shadow-md overflow-hidden">
      <div className="mb-4">
        <Image
          src="/images/hero-bg.webp"
          height={500}
          width={500}
          className="w-full h-[200px] sm:h-[250px]"
          alt=""
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center mb-6">
          <p className="text-sm text-primary flex items-center gap-2">
            <FaRegClock />
            03 April, 2022
          </p>
          <div className="divider divider-horizontal"></div>
          <p className="font-bold text-sm">Web Development</p>
        </div>
        <h3 className="font-semibold trans hover:text-primary">
          <Link href="">
            All of these amazing features come at an affordable price!
          </Link>
        </h3>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum
          a ea ullam suscipit at assumenda aspernatur sit saepe enim.
        </p>
        <button className="font-bold mt-6">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
