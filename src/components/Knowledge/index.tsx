import React from "react";
import { SectionStyle } from "./style";
import { UlKnowledge } from "./KnowledgeUl";
export const KnowledgeSection = () => {
  return (
    <SectionStyle>
      <div className="knowledge-text">
        <span id="knowledge" className="bracket">
          &#123;
        </span>
        <span className="knowledge-span">“Conhecimentos”:</span>
        <UlKnowledge />
      </div>
    </SectionStyle>
  );
};
