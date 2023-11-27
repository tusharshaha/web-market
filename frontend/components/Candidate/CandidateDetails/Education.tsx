import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Education: React.FC = () => {
  const educations = [
    {
      title: "Graphics Design",
      institution: "University of Michigan",
      startDate: "Jul 2018",
      endDate: "Jan 2020",
    },
    {
      title: "Diploma in CSE",
      institution: "University of Michigan",
      startDate: "Jul 2018",
      endDate: "Jan 2020",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {educations.map((ele, i) => (
        <div
          key={i}
          className="sm:pl-14 sm:border-l-4 py-4 border-slate-200 trans hover:border-primary"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between items-start">
            <div>
              <h3 className="font-bold text-xl">{ele.title}</h3>
              <h4 className="text-primary text-base mt-2">{ele.institution}</h4>
            </div>
            <span className="text-base flex items-center gap-2 text-slate-500">
              <FaCalendarAlt className="hidden sm:inline" /> {ele.startDate} -
              {ele.endDate}
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

export default Education;
