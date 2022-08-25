import styled from "styled-components";

export const NewestItemBox = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex: 0 0 338px;
  height: 682px;
  color: rgb(51, 51, 51);
  cursor: pointer;
`;

export const NewestItemImage = styled.div`
  overflow: hidden;
  position: relative;
  background-color: rgb(245, 245, 245);
  width: 338px;
  height: 435px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out 0s;
  }
`;

export const NewestFooter = styled.div`
  padding: 14px 10px 0px 0px;
`;
export const NewestFooterTop = styled.span`
  display: block;
  padding-bottom: 2px;
  & span {
    font-size: 14px;
    color: rgb(153, 153, 153);
    line-height: 19px;
    letter-spacing: -0.5px;
  }
`;

export const NewestTitle = styled.div`
  overflow: hidden;
  max-height: 58px;
  margin-bottom: 9px;
  padding: 0px;
  font-size: 20px;
  line-height: 29px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export const NewestPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    box-sizing: border-box;
    margin: 0;
  }
  & > div > span:last-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    white-space: nowrap;
    letter-spacing: -0.5px;
    color: rgb(51, 51, 51);
  }
`;

export const NewestDC = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  white-space: nowrap;
  letter-spacing: -0.5px;
  margin-right: 7px;
  color: rgb(250, 98, 47);
`;

export const NewestPrice = styled.span`
  padding-top: 2px;
  font-size: 16px;
  color: rgb(181, 181, 181);
  line-height: 24px;
  text-decoration: line-through;
`;

export const NewestDesc = styled.p`
  overflow: hidden;
  padding-top: 12px;
  font-size: 13px;
  color: rgb(153, 153, 153);
  line-height: 18px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;
