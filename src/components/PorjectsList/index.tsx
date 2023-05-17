import React, { useState } from "react";
import { projectsData } from "data/projectsData";
import site from "../../images/cloud64.png";
import github from "../../images/github64.png";

export const ProjectList = () => {
  const [projects, setProjects] = useState(projectsData);

  const changeProjects = (index: number) => {
    const newProjects = [...projects];
    const selectedProjects = newProjects.splice(index, 1)[0];
    newProjects.unshift(selectedProjects);

    setProjects(newProjects);
  };
  return (
    <>
      {projects.map((item, index) => (
        <li
          key={index}
          onClick={() => changeProjects(index)}
          className={index === 0 ? "first-project" : ""}
        >
          <img src={item.image} alt="" />
          <h2 className="title">
            <span>⬡</span> {item.name}
          </h2>
          <div className="links">
            <a href={item.link}>
              <img src={site} alt="" />
            </a>
            <a href={item.github}>
              <img src={github} alt="" />
            </a>
          </div>
        </li>
      ))}
    </>
  );
};
