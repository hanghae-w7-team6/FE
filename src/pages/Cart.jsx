import React from "react";
import styled from "styled-components";
import Layouts from "../Common/Layout";
import Header from "../Common/Header/Header";
import { useSelector } from "react-redux";
import CartItems from "../components/CartList/CartItems";
const Cart = () => {
  const CartList = useSelector((state) => state.cart.cart);
  console.log(CartList);

  return (
    <>
      <Header CartList={CartList} />
      <Layouts>
        <JustCart>
          <h2>장바구니</h2>
        </JustCart>
        <CartWrap>
          <LeftSide>
            <SelectNav>
              <ButtonWrap>
                <Label>
                  <input type="checkbox"></input>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                  {/* <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"/> */}
                  전체선택 (0/2)
                </Label>
                <span></span>
                <button>선택삭제</button>
              </ButtonWrap>
            </SelectNav>
            <CartContainer>
              <CartItems></CartItems>
            </CartContainer>
            <SelectNav>
              <ButtonWrap>
                <Label>
                  <input type="checkbox"></input>
                  {/* <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" /> */}
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ni4wMDAwMDAsIC0xMDkwLjAwMDAwMCkgdHJhbnNsYXRlKDEwMC4wMDAwMDAsIDkzNi4wMDAwMDApIHRyYW5zbGF0ZSg2MC4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
                  전체선택 (0/2)
                </Label>
                <span></span>
                <button>선택삭제</button>
              </ButtonWrap>
            </SelectNav>
          </LeftSide>
          <RightSide>
            <CartStatusWrap>
              <SearchLocation>
                <h3>배송지</h3>
                <div>
                  <p>
                    <span>배송지를 등록</span>하고
                    <br />
                    구매 가능한 상품을 확인하세요!
                  </p>
                </div>
                <button>
                  <span>
                    <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" />
                    주소 확인
                  </span>
                </button>
              </SearchLocation>
              <TotalPrice>
                <PriceWrap>
                  <span>상품금액</span>
                  <span style={{ fontSize: "18px" }}>
                    0<span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>상품할인 금액</span>
                  <span style={{ fontSize: "18px" }}>
                    0<span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>배송비</span>
                  <span style={{ fontSize: "18px" }}>
                    +3,000<span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <FreeDelivery>
                  <span></span>원 추가주문 시,
                  <span>무료배송</span>
                </FreeDelivery>
                <PriceWrap style={{ paddingTop: "12px" }}>
                  <span>결제예정금액</span>
                  <span style={{ fontSize: "20px" }}>
                    0<span style={{ fontSize: "14px" }}> 원</span>
                  </span>
                </PriceWrap>
                <Text>
                  <span>적립</span>
                  로그인 후 회원 등급에 따라 적립
                </Text>
              </TotalPrice>
              <Done>
                <button>주문하기</button>
              </Done>
            </CartStatusWrap>
          </RightSide>
        </CartWrap>
      </Layouts>
    </>
  );
};

export default Cart;

const JustCart = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px 0 50px 48px;

  h2 {
    font-size: 28px;
    font-weight: 600;
  }
`;

const CartWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 942px;
  max-height: 100%;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  width: 742px;
`;

const CartContainer = styled.div`
  height: auto;
`;

const SelectNav = styled.div`
  padding: 18px 10px 16px 2px;
  height: 60px;
`;

const ButtonWrap = styled.div`
  height: 26px;
  display: flex;

  span {
    border: 1px solid #dddddd;
    height: 14px;
    margin: 6px 21px 0px 22px;
  }

  button {
    border: none;
    background-color: transparent;
    font-weight: 600;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 600;

  input {
    width: 1px;
    height: 1px;
    border: none;
    visibility: hidden;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const RightSide = styled.div`
  width: 284px;
`;

const CartStatusWrap = styled.div`
  position: sticky;
  height: auto;
`;

const SearchLocation = styled.div`
  padding: 23px 19px 20px;
  border: 1px solid #f2f2f2;
  border-bottom: 0;

  button {
    width: 100%;
    height: 36px;
    border: 1px solid #5f0080;
    background-color: transparent;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    padding-top: 12px;
  }

  h3 {
    font-size: 16px;

    padding-left: 24px;
    background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg)
      0 50% no-repeat;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 16px;
  }

  span {
    &:first-child {
      color: #5f0080;
      font-weight: 600;
    }

    &:last-child {
      font-size: 12px;
      display: flex;
      align-items: center;
    }
  }
`;

const TotalPrice = styled.div`
  padding: 19px 18px 18px 20px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
`;
const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    &:first-child {
      width: 100px;
      font-weight: bold;
    }
  }
`;

const FreeDelivery = styled.p`
  color: #5f0080;
  text-align: right;
  font-size: 12px;
  padding-top: 4px;

  span {
    &:last-child {
      font-weight: bold;
    }
  }
`;
const Text = styled.div`
  font-size: 12px;
  text-align: right;
  padding-top: 15px;

  span {
    background-color: #ffbf00;
    font-size: 10px;
    padding: 2px 6px;
    margin: 0 4px 0 0;
    color: white;
    border-radius: 9px;
    text-align: center;
  }
`;

const Done = styled.div`
  padding: 20px 0 0;

  button {
    background-color: #5f0080;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    width: 100%;
    height: 56px;
  }
`;
