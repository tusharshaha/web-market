import DashBoardLayout from "@/components/DashBoardLayout";
import Chart from "@/components/Dashboard/Home/Chart";
import Message from "@/components/Dashboard/Home/Message";
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
    { icon: <TfiEmail />, title: "Messages", records: "12", color: "bg-[#28d5a6]" },
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
      {/* record section  */}
      <div className="grid grid-cols-4 gap-8">
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
      <div className="flex items-start justify-between gap-8 mt-8">
        <div className="w-3/5"><Chart/></div>
        <div className="w-2/5"><Message/></div>
      </div>
    </DashBoardLayout>
  );
};

export default DashboardHome;
