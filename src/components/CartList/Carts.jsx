import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Carts = ({ carts }) => {
  const [count, setCount] = useState(0);
  return (
    <CartLine>
      <CheckButton src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
      <Img src=""></Img>
      <Title>테스트 테스트 야야야</Title>
      <ButtonWrap>
        <Minus
          onClick={() => {
            setCount(count - 1);
          }}
        ></Minus>
        <Number>{count}</Number>
        <Plus
          onClick={() => {
            setCount(count + 1);
          }}
        ></Plus>
      </ButtonWrap>
      <CostWrap>
        <SaleCost>950원</SaleCost>
        <PrimeCost>1000원</PrimeCost>
      </CostWrap>
      <DeleteButton>
        <span></span>
      </DeleteButton>
    </CartLine>
  );
};
export default Carts;

const CartLine = styled.li`
  height: 78px;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const CheckButton = styled.img`
  margin: 0 12px 0 0;
`;

const Img = styled.img`
  width: 60px;
  height: 78px;
  margin-right: 20px;
`;

const Title = styled.p`
  width: 345px;
  margin-right: 20px;
  font-weight: 600;
  overflow: hidden;
`;

//수량 버튼 관련 묶음
const ButtonWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 88px;
  border-radius: 3px;
`;

const Minus = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
  vertical-align: top;
`;

const Number = styled.div`
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;

const Plus = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
  vertical-align: top;
`;
//가격관련 묶음

const CostWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const SaleCost = styled.span`
  width: 127px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 51, 51);
`;

const PrimeCost = styled.span`
  width: 127px;
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  color: rgb(181, 181, 181);
  text-decoration: line-through;
  padding-top: 4px;
`;

//삭제 버튼
const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 9px;
  background-color: transparent;

  span {
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
    background-size: cover;
    background-position: center center;
  }
`;
