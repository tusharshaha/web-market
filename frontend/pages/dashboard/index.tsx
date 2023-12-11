import DashBoardLayout from "@/components/DashBoardLayout";
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
      title: "Saved Jobs",
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
      <div className="grid grid-cols-4 gap-8">
        {candidateData.map((ele, i) => (
          <div
            key={i}
            className={`${ele.color} flex flex-col items-center justify-center py-6 gap-2 text-white font-semibold rounded-md`}
          >
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-lg text-xl">
              {ele.icon}
            </div>
            <p className="text-3xl">{ele.records}</p>
            <h5>{ele.title}</h5>
          </div>
        ))}
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellat
      vero! Sint id a, alias corrupti temporibus facilis perferendis deserunt!
      Eaque, reprehenderit at cum sit nemo voluptatem architecto! Neque, minus?
    </DashBoardLayout>
  );
};

export default DashboardHome;
