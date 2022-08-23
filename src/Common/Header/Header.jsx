import React, { useCallback, useEffect, useState } from "react";
import {
  HeadTop,
  UserHead,
  HeadUserLink,
  HeadeVertical,
  ServiceCenter,
  ServiceIcon,
  ServiceNav,
  HeadMain,
  HeadLeft,
  LogoButton,
  HeadCenter,
  SearchForm,
  HeadRight,
  HeadRightContents,
  CartIconWrap,
} from "./styles";
import logo from "./logo.svg";
import HeaderNav from "./HeaderNav/HeaderNav";
import FixedHeader from "./FixedHeader/FixedHeader";
import { Link } from "react-router-dom";
import jwt_Decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getCartAysnc } from "../../redux/modules/cartSlice";
const Header = () => {
  const [showFixedHeader, setShwoFixedHeader] = useState(false);

  useEffect(() => {
    function onScroll() {
      window.scrollY > 110
        ? setShwoFixedHeader(true)
        : setShwoFixedHeader(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [showFixedHeader]);

  const loginCheck = localStorage.getItem("token");
  const userData = jwt_Decode(loginCheck);
  const dispatch = useDispatch();

  const CartList = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCartAysnc());
  }, []);

  return (
    <>
      <HeadTop>
        <UserHead>
          {!userData ? (
            <>
              <HeadUserLink to="/join">회원가입</HeadUserLink>
              <HeadeVertical />
              <HeadUserLink to="/login" style={{ color: "inherit" }}>
                로그인
              </HeadUserLink>
            </>
          ) : (
            <HeadUserLink to="/">{userData.nickName}님</HeadUserLink>
          )}
          <HeadeVertical />
          <ServiceCenter>
            <HeadUserLink to="/" style={{ color: "inherit" }}>
              고객센터
              <ServiceIcon />
              <ServiceNav>
                <div>공지사항</div>
                <div>자주하는 질문</div>
                <div>1:1 문의</div>
                <div>대량주문 문의</div>
              </ServiceNav>
            </HeadUserLink>
          </ServiceCenter>
        </UserHead>
        <HeadMain>
          <HeadLeft to="/">
            <img src={logo} alt="마켓컬리 로고" />
            <LogoButton>마켓컬리</LogoButton>
          </HeadLeft>
          <HeadCenter>
            <SearchForm>
              <input placeholder="검색어를 입력해주세요" required />
              <button></button>
            </SearchForm>
          </HeadCenter>
          <HeadRight>
            <HeadRightContents>
              <div></div>
              <button aria-label="찜하기" type="button"></button>
              <CartIconWrap>
                <Link to="/cart">
                  <button>{CartList && <span>{CartList.length}</span>}</button>
                </Link>
              </CartIconWrap>
            </HeadRightContents>
          </HeadRight>
        </HeadMain>
      </HeadTop>
      <HeaderNav />
      {showFixedHeader && <FixedHeader CartList={CartList} />}
    </>
  );
};

export default Header;
