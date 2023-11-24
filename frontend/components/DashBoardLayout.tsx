import React from "react";

interface DashboardProps {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<DashboardProps> = ({ children }) => {
  return <div className="relative flex"></div>;
};

export default DashBoardLayout;
