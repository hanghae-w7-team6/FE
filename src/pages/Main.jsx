import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Common/Header/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import Suggest from "../components/Suggest/Suggest";
import LineBanner from "../components/LineBanner/LineBanner";
import { getProductAsync } from "../redux/modules/productSlice";
import SpeacilDeals from "../components/SpecialDeals/SpecialDeals";
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAsync());
  }, []);
  const list = useSelector((state) => state.product);
  console.log(list);
  return (
    <>
      <Header />
      <MainBanner />
      <Suggest list={list}>이 상품 어때요?</Suggest>
      <LineBanner />
      <SpeacilDeals></SpeacilDeals>
      {/* <Suggest list={list}>지금 가장 핫한 상품</Suggest> */}
    </>
  );
};

export default Main;
