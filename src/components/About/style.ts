import styled from "styled-components";

export const SectionStyle = styled.section`
  color: #29b2ff;
  width: 80%;
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  margin-top: 110px;
  scroll-behavior: smooth;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    .card {
      margin-top: 18px;
    }
  }

  .about-text {
    max-width: 692px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1;
  }

  span {
    font-size: 22px;
  }
  .bracket {
    color: #ffaa29;
  }
  .about-span {
    color: #c65f5f;
    padding-left: 25px;
  }
  p {
    text-align: start;
    padding-left: 75px;
    position: relative;
  }

  h1 {
    padding-left: 75px;
    background: linear-gradient(to right, #8f00ff, #5200ff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
    border-right: 3px solid orange;
    margin: 0;
    white-space: nowrap;
    animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 325px;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #29b2ff;
    }
  }
  .profile-img {
    width: 343px;
    height: 368px;
    border: 1px solid #8f00ff;
    border-radius: 15px;
    z-index: 0;
    background-color: rgba(36, 36, 36, 0.4);
    backdrop-filter: blur(1.7px);
  }
  .card {
    max-width: 340px;
    height: 370px;
    transition: all 0.2s;
    position: relative;
    cursor: pointer;
  }

  .card-inner {
    width: inherit;
    height: inherit;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    border-radius: 8px;
  }

  .card:hover {
    transform: scale(1.04) rotate(1deg);
  }

  .circle {
    width: 100px;
    height: 100px;
    background: radial-gradient(#8f00ff, #5200ff);
    border-radius: 50%;
    position: absolute;

    animation: move-up6 2s ease-in infinite alternate-reverse;
  }

  .circle:nth-child(1) {
    top: -25px;
    left: -25px;
  }

  .circle:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: move-down1;
  }

  @keyframes move-up6 {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
  }
`;
