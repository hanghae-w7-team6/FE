import React, { useEffect } from "react";
import Header from "../Common/Header/Header";
import styled from "styled-components";
import Layouts from "../Common/Layout";
import NewestItem from "../components/NewestItem/NewestItem";
import { useDispatch, useSelector } from "react-redux";
import { getPieceProductAsync } from "../redux/modules/productSlice";

const Newest = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (!isLoading) {
          dispatch(getPieceProductAsync());
        }
      }
    }
    // console.log(
    //   window.scrollY,
    //   document.documentElement.clientHeight,
    //   document.documentElement.scrollHeight
    // );
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isLoading]);

  // console.log(data?.slice().reverse());

  return (
    <>
      <Header />
      <Layouts>
        <NewestBanner>
          <img
            src="https://img-cf.kurly.com/category/banner/pc/e8443748-7800-4e0a-a8bc-268d72f8e29c"
            alt="배너 이미지"
          />
        </NewestBanner>
        <NewestHeader>신상품</NewestHeader>
        <NewestItemWrap>
          {data
            ?.slice()
            .reverse()
            .map((list, idx) => {
              return <NewestItem key={idx} list={list}></NewestItem>;
            })}
        </NewestItemWrap>
      </Layouts>
    </>
  );
};

export default Newest;

export const NewestBanner = styled.div`
  padding-bottom: 28px;
  text-align: center;
  & img {
    width: 100%;
    vertical-align: top;
    cursor: pointer;
    border: 0;
    max-width: 100%;
  }
`;
export const NewestHeader = styled.h3`
  padding: 23px 0px 20px;
  font-weight: 500;
  font-size: 28px;
  color: rgb(51, 51, 51);
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`;

export const NewestItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1050px;
`;
