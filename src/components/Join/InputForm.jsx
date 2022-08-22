import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { joinThunk, idCheckThunk } from "../../redux/modules/joinSlice";

import { Btn } from "../../elements/Btn";
import { Input } from "../../elements/Input";
import Agreement from "./Agreement";
import Modal from "./modal/Modal";

function InputForm() {
  const dispatch = useDispatch();

  // input을 통해 들어오는 유저 정보
  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
    confirmPw: "",
    nickName: "",
    email: "",
  });

  const { userId, password, confirmPw, nickName, email } = userInfo;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const jsonData = { userId, password, nickName, email }; // ! db로 보낼 진짜 정보

  // todo test 이름바꾸기!
  const data = useSelector((state) => state.join);

  // ! 8/21 밥먹고 와서 여기부터 하기! 중복검사... 후.... 모달창 로직도...ㅜㅜㅜㅜ 다시 짜야됨
  // 아이디 중복 검사
  const userIdCheck = () => {
    dispatch(idCheckThunk(userId));
  };
  // 모달창 로직(기본값이 false, 버튼 클릭시 true로 변경되면서 팝업)
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(!modal);
  };

  // ! ------------ 여기부터 유효성 검사 로직 -----------------
  // todo 1. 유효성 검사(아이디, 이메일, 닉네임, 패스워드)
  // todo 2. 유효하지 않은 문자는 애초부터 차단하기?
  // 유효성 검사 룰
  const userIdRegEx = /^[a-zA-Z0-9]{4,8}$/; // ID >> 숫자 및 알파벳만 가능(4~8글자)
  const passwordRegEx = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/; // Password >> 6~20글자 , 최소 1개 이상의 숫자 또는 특수문자 포함
  const nickNameRegEx = /^[가-힣a-zA-Z]{4,8}$/; // 닉네임 >> 한글 및 영문만 가능(4~8글자)
  const emailRegEx = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/; // 이메일 >>

  // 인풋에 들어온 내용이 valid한가?(참/거짓)
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isConfirmPwValid, setIsConfirmPwValid] = useState(false);
  const [isNickNameValid, setIsNickNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  // 유효성 검증 문구를 보여주는 useState모음
  const [idRuleDesc, setIdRuleDesc] = useState("");
  const [pwRuleDesc, setPwRuleDesc] = useState("");
  const [ConfirmPwRuleDesc, setConfirmPwRuleDesc] = useState("");
  const [nickNameRuleDesc, setNickNameRuleDesc] = useState("");
  const [emailRuleDesc, setEmailRuleDesc] = useState("");

  // ID 유효성 검증 이벤트함수
  const userIdValidation = () => {
    if (userIdRegEx.test(userId)) {
      setIsIdValid(true);
      setIdRuleDesc("");
    } else {
      setIsIdValid(false);
      setIdRuleDesc("4자 이상 8자 이하의 영문 및 숫자를 조합");
    }
  };

  // 패스워드 유효성 검증 이벤트함수
  const passwordValidation = () => {
    if (passwordRegEx.test(password)) {
      setIsPwValid(true);
      setPwRuleDesc("");
    } else {
      setIsPwValid(false);
      setPwRuleDesc(
        "6자 이상 20자 이하의 영문 및 최소 1개이상의 숫자/특수문자의 조합"
      );
    }
  };

  // 패스워드 재확인 유효성 검증 이벤트함수
  const confirmPwValidation = () => {
    if (confirmPw === password) {
      setIsConfirmPwValid(true);
      setConfirmPwRuleDesc("");
    } else {
      setIsConfirmPwValid(false);
      setConfirmPwRuleDesc("동일한 비밀번호를 입력");
    }
  };

  // 닉네임 유효성 검증 이벤트함수
  const nickNameValidation = () => {
    if (nickNameRegEx.test(nickName)) {
      setIsNickNameValid(true);
      setNickNameRuleDesc("");
    } else {
      setIsNickNameValid(false);
      setNickNameRuleDesc("4자 이상 5자이하의 한글/영문");
    }
  };

  // 이메일 유효성 검증 이벤트함수
  const emailValidation = () => {
    if (emailRegEx.test(email)) {
      setIsEmailValid(true);
      setEmailRuleDesc("");
    } else {
      setIsEmailValid(false);
      setEmailRuleDesc("이메일 형식으로 입력해 주세요.");
    }
  };
  // todo 중복 체크(아이디, 이메일, 닉네임)

  // todo 카카오주소검색 api....

  // 모든 항목을 만족했을 때만 submit!
  const SubmitData = (e) => {
    e.preventDefault();
    //여기에 유효성검증 및 중복검사를 하지 않았으면 경고창 발생하게 하고 모든걸 만족하면 dispatch하게 해야됨!
    // 중복검사는 통신을 써야되는구만..
    if (
      isIdValid &&
      isPwValid &&
      isConfirmPwValid &&
      isNickNameValid &&
      isEmailValid === true
    ) {
      dispatch(joinThunk(jsonData)); // ! 여기에 userInfo대신에 jsondata로 넣어주기!
    } else {
      alert("만족안한 항목이 있나보군요!");
    }
  };
  // ! ------------ 여기부터 뷰 -----------------
  return (
    <div>
      <StRow>
        <LabelWrapper>
          <Label>
            아이디
            <MandatoryMark>*</MandatoryMark>
          </Label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="text"
            name="userId"
            value={userId}
            onChange={handleInput}
            placeholder="아이디를 입력해주세요"
            autoComplete="off"
            onKeyUp={userIdValidation}
            maxLength="9"
          />
          <Validation>
            <p>{idRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper visibility="visible">
          <Btn
            type="button"
            onClick={() => {
              userIdCheck();
              showModal();
            }}
          >
            중복확인
          </Btn>
        </BtnWrapper>
      </StRow>
      {/* --------- 모달창 ------------- */}
      {modal ? (
        <Modal modal={modal} setModal={setModal} ruleDesc={idRuleDesc} />
      ) : null}
      <StRow>
        <LabelWrapper>
          <Label>
            비밀번호
            <MandatoryMark>*</MandatoryMark>
          </Label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="text"
            name="password"
            value={password}
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            onKeyUp={passwordValidation}
            maxLength="21"
          />
          <Validation>
            <p>{pwRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <StRow>
        <LabelWrapper>
          <Label>
            비밀번호확인
            <MandatoryMark>*</MandatoryMark>
          </Label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="text"
            name="confirmPw"
            value={confirmPw.value}
            onChange={handleInput}
            placeholder="비밀번호를 한번 더 입력해주세요"
            autoComplete="off"
            onKeyUp={confirmPwValidation}
            maxLength="21"
          />
          <Validation>
            <p>{ConfirmPwRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <StRow>
        <LabelWrapper>
          <Label>
            닉네임
            <MandatoryMark>*</MandatoryMark>
          </Label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="text"
            name="nickName"
            value={nickName.value}
            onChange={handleInput}
            placeholder="닉네임을 입력해주세요"
            autoComplete="off"
            onKeyUp={nickNameValidation}
            maxLength="6"
          />
          <Validation>
            <p>{nickNameRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper visibility="visible">
          <Btn type="button">중복확인</Btn>
        </BtnWrapper>
      </StRow>
      <StRow>
        <LabelWrapper>
          <Label>
            이메일
            <MandatoryMark>*</MandatoryMark>
          </Label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="text"
            name="email"
            value={email.value}
            onChange={handleInput}
            placeholder="이메일을 입력해주세요"
            autoComplete="off"
            onKeyUp={emailValidation}
          />
          <Validation>
            <p>{emailRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper visibility="visible">
          <Btn type="button">중복확인</Btn>
        </BtnWrapper>
      </StRow>
      <StRow>
        <LabelWrapper>
          <Label>주소</Label>
        </LabelWrapper>
        <InputWrapper>
          <Btn width="100%" fontSize="14px" fontWeight="500" type="button">
            <BtnImg
              src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
              alt="돋보기"
            />
            주소 검색
          </Btn>
          <Validation>
            <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <Line />
      <Agreement /> {/*--------------- 시간있으면 작성.. */}
      <SubmitBtnWrapper>
        <Btn
          fontSize="16px"
          fontWeight="500"
          width="240px"
          height="56px"
          color="white"
          backgroundColor="#5f0080"
          onClick={SubmitData}
        >
          가입하기
        </Btn>
      </SubmitBtnWrapper>
    </div>
  );
}
export default InputForm;

const StRow = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 10px 20px;
`;

const LabelWrapper = styled.div`
  display: block;
  width: 139px;
  padding-top: 12px;
`;
const Label = styled.label`
  color: rgb(51, 51, 51);
  font-size: 12px;
  line-height: 20px;
`;
const MandatoryMark = styled.span`
  color: #ee6a7b;
`;

const InputWrapper = styled.div`
  flex: 1 1 0%;
  position: relative;
`;

const BtnWrapper = styled.div`
  width: 120px;
  margin-left: 8px;
  visibility: ${(props) => props.visibility || "hidden"};
`;

const Validation = styled.div`
  padding: 10px 0;
  & p {
    font-size: ${(props) => props.fontSize || "13px"};
    color: ${(props) => props.color || " rgb(240, 63, 64)"};
    margin-top: -4px;
  }

  & span {
    display: block;
    /* margin-top: 10px; */
    font-size: 12px;
    line-height: 18px;
    color: rgb(102, 102, 102);
  }
`;
const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(247, 247, 247);
  padding: 40px 0px;
`;

const Line = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid rgb(51, 51, 51);
`;

const BtnImg = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  vertical-align: middle;
`;
