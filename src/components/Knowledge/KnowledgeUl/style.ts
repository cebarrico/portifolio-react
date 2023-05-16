import styled from "styled-components";

export const UlStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 78px;

  .card-flip {
    position: relative;
    width: 270px;
    height: 258px;
    transition: transform 0.8s;
    list-style-type: none;
    transform-style: preserve-3d;
  }
  .card-flip:hover {
    transform: rotateY(180deg);
  }

  .front-li,
  .back-li {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    border: 1px solid #8f00ff;
    border-radius: 20px;
  }
  .back-li {
    background: linear-gradient(
      120deg,
      rgba(143, 0, 255, 0.2) 30%,
      rgba(82, 0, 255, 0.2) 88%,
      rgba(143, 0, 255, 0.2) 40%,
      rgba(82, 0, 255, 0.2) 78%
    );

    backdrop-filter: blur(1.7px);
    color: white;
    transform: rotateY(180deg);
    width: 270px;
    height: 258px;
    text-align: center;
    overflow-y: auto;
  }

  .back-li > a {
    width: 90%;
    height: 200px;
    font-size: 16px;
    color: #29b2ff;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    white-space: pre-wrap;

    text-overflow: ellipsis;
  }
  .front-li > img {
    width: 158px;
    height: 158px;
  }
  .front-li > h2 {
    font-size: 22px;
  }
  .front-li > h2 > span {
    font-size: 22px;
    color: #8f00ff;
  }

  @media (max-width: 800px) {
    display: inline-flex;
    flex-direction: row;
    overflow-x: scroll;
    flex-wrap: nowrap;

    li {
      flex: 0 0 auto;
      left: 0;
    }
  }
`;
