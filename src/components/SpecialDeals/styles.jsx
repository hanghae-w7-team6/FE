import styled from "styled-components";

export const SpeacilDealsContainer = styled.div`
  height: 100%;
`;

export const SpeacilDealsBox = styled.div`
  width: 1050px;
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 80px 0px;
`;

export const TimerBox = styled.div`
  width: 249px;
  & h2 {
    font-size: 28px;
    color: rgb(51, 51, 51);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.26px;
    margin-bottom: 10px;
  }
  & h3 {
    font-size: 16px;
    color: rgb(153, 153, 153);
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: normal;
    margin-bottom: 24px;
  }
`;

export const Timer = styled.div`
  display: flex;
`;

export const TimerIcon = styled.div`
  margin-right: 5px;
  & svg {
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
    overflow: hidden;
  }
`;
