/* eslint-disable @next/next/no-img-element */
import DashBoardLayout from "@/components/DashBoardLayout";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import React from "react";

const Bookmarks: NextPage = () => {
  const jobs = new Array(15).fill(0);
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Bookmarks" />
      <div className="max-h-screen overflow-auto scrollbar">
        <table className="w-full border-collapse border-primary rounded-md text-base shadow-md">
          <thead className="text-white bg-primary tracking-widest">
            <tr>
              <th className="p-4 text-left">Job Title</th>
              <th className="p-4">Deadline</th>
              <th className="p-4">Company</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {jobs.map((ele, i) => (
              <tr key={i}>
                <td>
                  <div className="p-4 flex gap-3 items-center">
                    <img
                      src="/images/company.webp"
                      className="w-[45px] h-[45px] rounded-full"
                      height={100}
                      width={100}
                      alt="company logo"
                    />
                    <div className="max-w-[150px] mr-8 md:mr-0 md:max-w-[200px]">
                      <p className="font-semibold text-lg truncate">
                        Front End Developer
                      </p>
                      <p className="text-slate-500 truncate">New York, USA</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <p>03/07/2022</p>
                </td>
                <td className="p-4 text-center max-w-[100px]">
                  <p className="truncate">Zoomly.Co Ltd</p>
                </td>
                <td className="text-center">
                  <button className="btn btn-primary text-white btn-xs md:btn-sm">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashBoardLayout>
  );
};

export default Bookmarks;
