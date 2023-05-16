import profile from "../../images/profileimg.png";
import { SectionStyle } from "./style";
import { IconsBg } from "../IconsBg";
export const AboutSection = () => {
  return (
    <SectionStyle id="about">
      <IconsBg />
      <div className="about-text">
        <span className="bracket">&#123;</span>
        <span className="about-span">“sobre”:</span>
        <p>“Olá, meu nome é...</p>
        <h1>CELSO BARRICO</h1>
        <p>
          Sou um desenvolverdor Full-Stack 😎 Sempre fui apaixonado pela área da
          tecnologia, e em junho de 2022 decidi começar minha carreira como
          desenvolvedor,abaixo segue um pouco dos meus conhecimentos e
          projetos.”
        </p>
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <img src={profile} alt="" className="card-inner" />
      </div>
    </SectionStyle>
  );
};
