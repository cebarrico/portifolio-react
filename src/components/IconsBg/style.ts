import styled from "styled-components";

export const IconsStyle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  img {
    width: 50px;
    height: 50px;
    border: none;
    position: absolute;
    border-radius: 40%;
  }
  .ts-1 {
    top: 7.3%;
    left: 8.7%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .ts-2 {
    top: 19.1%;
    left: 27.9%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .ts-3 {
    top: 32.8%;
    left: 46.2%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .ts-4 {
    top: 44.6%;
    left: 64.8%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .ts-5 {
    top: 57.4%;
    left: 83.3%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .ts-6 {
    top: 70.1%;
    left: 18.6%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .ts-7 {
    top: 82.9%;
    left: 37.1%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .ts-8 {
    top: 95.7%;
    left: 55.5%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .ts-9 {
    top: 8.2%;
    left: 74.1%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .ts-10 {
    top: 21.8%;
    left: 92.6%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .js-1 {
    top: 11.4%;
    left: -0.3%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .js-2 {
    top: 14.1%;
    left: 19.3%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .js-3 {
    top: 26.9%;
    left: 36.9%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .js-4 {
    top: 39.6%;
    left: 56.4%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .js-5 {
    top: 30.4%;
    left: 82%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .js-6 {
    top: 80.1%;
    left: 2.7%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .js-7 {
    top: 88.9%;
    left: 64.3%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .js-8 {
    top: 2.4%;
    left: 52.9%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .rct-1 {
    top: 29.2%;
    left: 76.4%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .rct-2 {
    top: 0.9%;
    left: 94%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .rct-3 {
    top: 41.7%;
    left: 15.7%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .rct-4 {
    top: 54.4%;
    left: 34.3%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .rct-5 {
    top: 67.2%;
    left: 52.9%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .rct-6 {
    top: 80%;
    left: 71.4%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .rct-7 {
    top: 92.7%;
    left: 90%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .postgres-1 {
    top: 31.9%;
    left: 5.2%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .postgres-2 {
    top: 37.7%;
    left: 25.7%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .postgres-3 {
    top: 52.4%;
    left: 44.3%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .postgres-4 {
    top: 64.2%;
    left: 62.9%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .postgres-5 {
    top: 66.9%;
    left: 76.4%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .postgres-6 {
    top: 83.7%;
    left: 14.7%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .postgres-7 {
    top: 3.2%;
    left: 33.3%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .phy-1 {
    top: 22.5%;
    left: 51.8%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .phy-2 {
    top: 35.2%;
    left: 70.4%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .phy-3 {
    top: 48%;
    left: 89%;
    animation: glow 1.5s linear, move 5s infinite;
  }
  .phy-4 {
    top: 60.7%;
    left: 8.7%;
    animation: glow 1.5s linear, move2 5s infinite;
  }

  .phy-5 {
    top: 73.5%;
    left: 27.2%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .phy-6 {
    top: 86.2%;
    left: 45.8%;
    animation: glow 1.5s linear, move 5s infinite;
  }

  .phy-7 {
    top: 1.7%;
    left: 64.3%;

    animation: glow 1.5s linear, move2 5s infinite;
  }
  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(10px, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes move2 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-10px, -10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes glow {
    0% {
      opacity: 0;
      background-color: #8f00ff;
      box-shadow: 0 0 10px #8f00ff;
    }
    20% {
      background-color: #7800e3;
      box-shadow: 0 0 12px #7800e3;
    }
    40% {
      background-color: #6200c6;
      box-shadow: 0 0 14px #6200c6;
    }
    60% {
      opacity: 1;
      background-color: #4b00a9;
      box-shadow: 0 0 16px #4b00a9;
    }
    80% {
      background-color: #35008c;
      box-shadow: 0 0 18px #35008c;
    }
    100% {
      background-color: #242424;
      box-shadow: 0 0 0 #242424;
    }
  }
`;
