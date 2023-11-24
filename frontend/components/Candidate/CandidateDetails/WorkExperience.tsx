import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const WorkExperience: React.FC = () => {
  const works = [
    {
      title: "Front End Developer",
      company: "Sommly",
      startDate: "May 2022",
      endDate: "Nov 2022",
    },
    {
      title: "Front End Developer",
      company: "Deesha Trade Endevours Pvt. Ltd.",
      startDate: "Jan 2022",
      endDate: "Apr 2022",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      {works.map((work, i) => (
        <div
          key={i}
          className="sm:pl-14 sm:border-l-4 py-4 border-slate-200 trans hover:border-primary"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">{work.title}</h3>
              <h4 className="text-primary text-base mt-2">{work.company}</h4>
            </div>
            <span className="text-base flex items-center gap-2 text-slate-500">
              <FaCalendarAlt className="hidden sm:inline" /> {work.startDate} -{" "}
              {work.endDate}
            </span>
          </div>
          <p className="mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dicta tenetur animi ea id consequatur deserunt qui
            laborum aliquam, vel ratione dignissimos? Ducimus corrupti, iure
            facere iste aliquid distinctio unde quos qui natus numquam accusamus
            necessitatibus officiis a ab dignissimos.
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
