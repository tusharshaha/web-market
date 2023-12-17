import DashBoardLayout from "@/components/DashBoardLayout";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import React from "react";

const Bookmarks: NextPage = () => {
  return (
    <DashBoardLayout>
      <BreadCrumb pathName="Bookmarks" />
    </DashBoardLayout>
  );
};

export default Bookmarks;
