import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  max-width: 1150px;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;

  .first-project {
    width: 80%;
    height: 500px;
    border: 1px solid #8f00ff;
    box-shadow: 0 0 10px #8f00ff;
    animation: glow-animation 1.5s ease-in-out infinite;
  }

  li {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    transition: transform 0.3s ease-in-out;
    position: relative;

    border-radius: 20px;
    overflow: hidden;
    list-style-type: none;
    transform-style: preserve-3d;
  }

  .title {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(36, 36, 36, 0.6);
    backdrop-filter: blur(1.7px);
    font-size: 22px;
    padding: 5px;
  }
  .title > span {
    color: #8f00ff;
  }

  .links {
    position: absolute;
    display: flex;
    background-color: rgba(36, 36, 36, 0.9);
    backdrop-filter: blur(1.7px);
    padding: 10px;
    justify-content: space-around;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: transform 1s ease-in-out;
  }

  li > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
  }

  .first-project:hover > {
    filter: grayscale(100%);
  }

  .first-project:hover > .links {
    transition: transform 1s ease-in-out;
    z-index: 2;
    border: 1px solid #8f00ff;
    box-shadow: 0 0 10px #8f00ff;
    animation: glow-animation 1.5s ease-in-out infinite;
    border-radius: 0 0 20px 20px;
  }
  .first-project:hover > .title {
    transition: transform 1s ease-in-out;
    z-index: 2;
    border: 1px solid #8f00ff;
    box-shadow: 0 0 10px #8f00ff;
    animation: glow-animation 1.5s ease-in-out infinite;
  }
  @media (max-width: 800px) {
    width: 100%;
    .first-project {
      width: 100%;
      height: 375px;
    }
    .first-project > img {
      object-fit: fill;
    }
    li {
      width: 115px;
      height: 100px;
    }
  }
  @keyframes glow-animation {
    0% {
      box-shadow: 0 0 10px #8f00ff;
    }
    50% {
      box-shadow: 0 0 20px #8f00ff;
    }
    100% {
      box-shadow: 0 0 10px #8f00ff;
    }
  }
`;
