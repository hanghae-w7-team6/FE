import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
import styled from "styled-components";
import CartMap from "./CartMap";

const CartItems = () => {
  const cartData = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAysnc());
  }, [dispatch]);
  return (
    <ListWrap>
      {cartData?.map((list) => {
        return <CartMap list={list}></CartMap>;
      })}
    </ListWrap>
  );
};
export default CartItems;

const ListWrap = styled.ul`
  border-top: 1px solid black;
`;
