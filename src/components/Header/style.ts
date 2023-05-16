import styled from "styled-components";
const NavStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #8f00ff;
  nav {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 100px;
    height: 100px;
  }
  .desktop-menu {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 800px) {
    .desktop-menu {
      display: none;
    }
  }
  a {
    color: #29b2ff;
    position: relative;
    font-size: 22px;
  }
  a > span {
    color: #8f00ff;
  }
  a:hover::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: #8f00ff;
    animation: underline 0.2s linear;
    box-shadow: 0 0 15px #8f00ff, 0 0 10px #8f00ff, 0 0 20px #8f00ff;
  }
  a:hover > span {
    text-shadow: 0 0 15px #8f00ff, 0 0 10px #8f00ff, 0 0 20px #8f00ff;
  }

  @keyframes underline {
    0% {
      width: 0;
    }
    100% {
      right: 100;
    }
  }
`;

export default NavStyle;
