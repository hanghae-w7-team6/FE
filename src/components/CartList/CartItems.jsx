import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
import styled from "styled-components";
import Carts from "./Carts";

const CartItems = () => {
  const cartData = useSelector((state) => state);
  console.log(cartData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAysnc());
  }, [dispatch]);
  return (
    <ListWrap>
      <Carts></Carts>
    </ListWrap>
  );
};
export default CartItems;

const ListWrap = styled.ul`
  border-top: 1px solid black;
`;
