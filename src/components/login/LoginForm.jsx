import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/modules/loginSlice";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import { Input } from "../../elements/Input";
import { Btn } from "../../elements/Btn";

function LoginForm() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [userId, onIdHandler] = useInput("");
  const [password, onPasswordHandler] = useInput("");

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userId === "" || password === "") {
      alert("아이디 혹은 비밀번호를 입력해주세요");
      return;
    }
    dispatch(loginThunk({ userId, password }));
    if (isLoggedIn) {
      nav("/");
    }
  };

  const loginCheck = localStorage.getItem("token");
  // console.log(loginCheck);

  // 로컬스토리지에 토큰이 있으면 메인페이지로 이동

  useEffect(() => {
    if (loginCheck) {
      nav("/");
    }
  }, [loginCheck]);

  return (
    <Container>
      <Title>로그인</Title>
      <Body>
        <form>
          <InputArea>
            <InputWrapper>
              <Input
                height="54px"
                fontSize="14px"
                placeholder="아이디를 입력해주세요"
                type="text"
                name="userId"
                value={userId}
                onChange={onIdHandler}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                height="54px"
                fontSize="14px"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                name="password"
                value={password}
                onChange={onPasswordHandler}
              />
            </InputWrapper>
          </InputArea>
          <FindUserInfoArea>
            <p>아이디 찾기</p>
            <span></span>
            <p>비밀번호 찾기</p>
          </FindUserInfoArea>
          <BtnWrapper>
            <Btn
              type="submit"
              width="100%"
              height="54px"
              border="0px none"
              backgroundColor="#5f0080"
              color="white"
              fontSize="16px"
              onClick={submitHandler}
            >
              로그인
            </Btn>
            <div style={{ height: "10px" }}></div>
            <Btn
              type="button"
              width="100%"
              height="54px"
              fontSize="16px"
              onClick={() => nav("/join")}
            >
              회원가입
            </Btn>
          </BtnWrapper>
        </form>
      </Body>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`;
const Body = styled.div`
  width: 340px;
  margin: 0px auto;
  letter-spacing: -0.6px;
`;
const InputArea = styled.div`
  margin-top: 30px;
`;
const InputWrapper = styled.div`
  margin-bottom: 12px;
`;

const FindUserInfoArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 13px;
  & p {
    color: rgb(51, 51, 51);
    font-size: 13px;
    letter-spacing: -0.6px;
  }

  & span {
    width: 1px;
    height: 10px;
    margin: 3px 6px 0px;
    background-color: rgb(51, 51, 51);
  }
`;
const BtnWrapper = styled.div`
  margin-top: 28px;
  position: relative;
  height: 48px;
`;
