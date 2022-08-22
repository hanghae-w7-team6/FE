import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Common/Header/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import Suggest from "../components/Suggest/Suggest";
import LineBanner from "../components/LineBanner/LineBanner";
import SpeacilDeals from "../components/SpecialDeals/SpecialDeals";
import Catergories from "../components/Categories/Categories";

import { getProductAsync } from "../redux/modules/productSlice";
import { getCategoryAsync } from "../redux/modules/categorySlice";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const [category, setCategory] = useState("추석선물세트");

  const CateogryFilter = useSelector((state) => state.category.data);
  console.log("CateogryFilter:", CateogryFilter);

  const onChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(getCategoryAsync(category));
  }, [category]);

  console.log("Category:", category);
  const list = useSelector((state) => state.product.data);
  // console.log(list);

  return (
    <>
      <Header />
      <MainBanner />
      <Suggest list={list}>이 상품 어때요?</Suggest>
      <LineBanner />
      <SpeacilDeals>추석특가</SpeacilDeals>
      <Suggest list={CateogryFilter}>
        MD의 추천
        <Catergories
          onChangeCategory={onChangeCategory}
          setCategory={setCategory}
        ></Catergories>
      </Suggest>
    </>
  );
};

export default Main;
