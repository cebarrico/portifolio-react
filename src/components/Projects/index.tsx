import React from "react";

import { SectionStyle } from "./style";

import { UlProject } from "./ProjectUl";

export const ProjectSection = () => {
  return (
    <SectionStyle>
      <div className="project-text">
        <span id="projects" className="bracket">
          &#123;
        </span>
        <span className="project-span">“Projetos”:</span>
      </div>
      <UlProject />
    </SectionStyle>
  );
};
