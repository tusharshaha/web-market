import DashBoardLayout from "@/components/DashBoardLayout";
import Chart from "@/components/Dashboard/Home/Chart";
import Message from "@/components/Dashboard/Home/Message";
import BreadCrumb from "@/components/common/BreadCrumb";
import { NextPage } from "next";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineBusinessCenter, MdOutlineBookmarks } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const DashboardHome: NextPage = () => {
  const candidateData = [
    {
      icon: <MdOutlineBusinessCenter />,
      title: "Total Job Applied",
      records: "50",
      color: "bg-[#8c43ff]",
    },
    {
      icon: <TfiEmail />,
      title: "Messages",
      records: "12",
      color: "bg-[#28d5a6]",
    },
    {
      icon: <MdOutlineBookmarks />,
      title: "Bookmarked Jobs",
      records: "40",
      color: "bg-[#f6b851]",
    },
    {
      icon: <FaRegEye />,
      title: "Profile View",
      records: "105",
      color: "bg-[#cb09e8]",
    },
  ];
  return (
    <DashBoardLayout>
      <BreadCrumb />
      {/* record section  */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {candidateData.map((ele, i) => (
          <div
            key={i}
            className={`${ele.color} flex flex-col items-center justify-center py-8 gap-2 text-white font-semibold rounded-md group`}
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-full text-2xl group-hover:bg-white group-hover:text-black trans mb-2">
              {ele.icon}
            </div>
            <p className="text-4xl">{ele.records}</p>
            <h5>{ele.title}</h5>
          </div>
        ))}
      </div>
      {/* chart and message section  */}
      <div className="grid lg:grid-cols-5 gap-8 mt-8">
        <div className="col-span-1 lg:col-span-3 overflow-hidden shadow-md">
          <Chart />
        </div>
        <div className="col-span-1 lg:col-span-2 overflow-hidden shadow-md">
          <Message />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default DashboardHome;
