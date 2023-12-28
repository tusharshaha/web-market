import React from "react";

const Skills: React.FC = () => {
  const skills = [
    {
      category: "Languages",
      skills: [
        {
          subCategory: "Front End",
          langs: [
            "HTML",
            "CSS",
            "Javascript",
            "Typescript",
          ],
        },
        {
          subCategory: "Back End",
          langs: ["Node.js"],
        },
      ],
    },
    {
      category: "Technologies",
      skills: [
        {
          subCategory: "UI Related",
          langs: ["Tailwind CSS", "DaisyUI", "Bootstrap"],
        },
        {
          subCategory: "FE Related",
          langs: ["React.js", "Next.js", "Redux", "JWT"],
        },
        {
          subCategory: "BE Related",
          langs: ["Express.js", "Nest.js", "GraphQL", "MongoDB"],
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          subCategory: "Coding",
          langs: ["VS Code", "npm", "yarn", "Jira", "ClickUp"],
        },
        {
          subCategory: "Design",
          langs: ["Figma"],
        },
      ],
    },
  ];
  return (
    <div className="bg-slate-50 rounded-md shadow-md p-6">
      <h2 className="text-2xl font-bold element-highlight before:left-[-22px] relative mb-6">
        Expertise
      </h2>
      {skills.map((skill, i) => (
        <div key={i} className="space-y-4">
          <span className="font-bold mt-3 inline-block">{skill.category}</span>
          {skill.skills.map((ele, i) => (
            <div key={i} className="flex items-start text-sm text-slate-500">
              <div className="w-1/4 mr-3">
                <span className="font-bold">{ele.subCategory} :</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-3/4">
                {ele.langs.map((lang, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-primary text-primary font-semibold py-1 px-2 text-xs normal-case"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
