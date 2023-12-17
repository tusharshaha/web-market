import React from "react";

const JobDetailsSkelton = () => {
  return (
    <div className="border border-slate-500 shadow rounded-md p-4 w-full h-screen overflow-y-auto scrollbar">
      <div className="animate-pulse">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3 pb-3 border-b">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
          <div className="h-[100vh] w-full bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSkelton;
