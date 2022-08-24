import React from "react";
import {
  NewestItemBox,
  NewestItemImage,
  NewestFooter,
  NewestFooterTop,
  NewestTitle,
  NewestPriceBox,
  NewestDC,
  NewestPrice,
  NewestDesc,
} from "./styles";
import { CartButton } from "../Suggest/SuggestList";
const NewestItem = ({ list }) => {
  return (
    <>
      <NewestItemBox>
        <NewestItemImage>
          <img src={list?.productImage} alt="상품 이미지" />
          <CartButton>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
              alt="장바구니 아이콘"
            />
          </CartButton>
        </NewestItemImage>
        <NewestFooter>
          <NewestFooterTop>
            <span>샛별배송</span>
          </NewestFooterTop>
          <NewestTitle>{list?.productName}</NewestTitle>
          <NewestPriceBox>
            <div>
              <NewestDC>5%</NewestDC>
              <span>{list?.price * 0.95}</span>
            </div>
            <NewestPrice>{list?.price}</NewestPrice>
          </NewestPriceBox>
          <NewestDesc>{list?.desc}</NewestDesc>
        </NewestFooter>
      </NewestItemBox>
    </>
  );
};

export default NewestItem;
