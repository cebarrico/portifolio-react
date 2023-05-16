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

  .knowledge-text {
    max-width: 100%;
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
  .knowledge-span {
    color: #c65f5f;
    padding-left: 25px;
  }
`;
