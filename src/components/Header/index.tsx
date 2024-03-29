import { motion } from "framer-motion";
import NavStyle from "./style";
import logo from "../../images/logoceelz.png";
import { MenuBtm } from "../MenuBtm";

export const Header = () => {
  return (
    <NavStyle>
      <motion.nav
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        whileInView={{ opacity: 1 }}
      >
        <img src={logo} alt="" />
        <MenuBtm />
        <div className="desktop-menu">
          <a href="#about">
            <span>⬡</span> sobre
          </a>
          <a href="#knowledge">
            <span>⬡</span> conhecimento
          </a>
          <a href="#projects">
            <span>⬡</span> projetos
          </a>
          <a href="/contact">
            <span>⬡</span> contato
          </a>
        </div>
      </motion.nav>
    </NavStyle>
  );
};
