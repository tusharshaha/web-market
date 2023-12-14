import React from "react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const BreadCrumb: React.FC<{
  pathName?: string;
}> = ({ pathName }) => {
  const { name } = useAuth();
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
      {pathName ? (
        <h1 className="text-xl md:text-3xl font-bold">{pathName}</h1>
      ) : (
        <h1 className="text-xl md:text-3xl font-bold flex items-center">
          Hi
          <span className="truncate max-w-[200px] inline-block ml-2">
            {name}
          </span>
          , Welcome Back!
        </h1>
      )}
      <div className="rounded-full bg-slate-200 px-4 py-2">
        <ul className="flex items-center gap-2 text-sm">
          <li className="flex items-center gap-2">
            <Link href="/" className="hover:text-primary trans">
              Home
            </Link>
            <span className="text-slate-400">
              <FaAngleRight />
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span>Candidate</span>
            <span className="text-slate-400">
              <FaAngleRight />
            </span>
          </li>
          <li>{pathName || "Dashboard"}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
