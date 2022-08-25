import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  joinThunk,
  idCheckThunk,
  emailCheckThunk,
  emailAuthThunk,
  resetJoinState,
} from "../../redux/modules/joinSlice";
import { useNavigate } from "react-router-dom";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Btn } from "../../elements/Btn";
import { Input } from "../../elements/Input";
import {
  StRow,
  LabelWrapper,
  InputWrapper,
  BtnWrapper,
  Validation,
  SubmitBtnWrapper,
} from "./Style";
import Agreement from "./Agreement";

function JoinForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
    confirmPw: "",
    nickName: "",
    email: "",
    address: "",
  });

  const { userId, password, confirmPw, nickName, email, address } = userInfo;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // ! ------------ 여기부터 유효성 검사 로직 -----------------
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
  // ! ------------ 여기부터 중복 확인 로직 -----------------
  const isIdUsable = useSelector((state) => state.join.isIdUsable);
  const isEmailUsable = useSelector((state) => state.join.isEmailUsable);

  // 아이디 중복 확인 함수
  const userIdCheck = () => {
    if (userId === "") {
      alert("4자 이상 8자 이하의 영문 및 숫자를 조합");
    } else {
      if (isIdValid) {
        dispatch(idCheckThunk(userId));
      } else {
        alert(idRuleDesc);
      }
    }
  };

  // 이메일 중복 확인 함수
  const emailCheck = () => {
    if (email === "") {
      alert("이메일 형식으로 입력해 주세요.");
    } else {
      if (isEmailValid) {
        dispatch(emailCheckThunk(email));
      } else {
        alert(emailRuleDesc);
      }
    }
  };
  // const SendEamilAuth = () => {
  //   if (email === "") {
  //     alert("이메일 형식으로 입력해 주세요.");
  //   } else {
  //     if (isEmailValid) {
  //       dispatch(emailAuthThunk(email));
  //     } else {
  //       alert(emailRuleDesc);
  //     }
  //   }
  // };
  // 모달창 로직(기본값이 false, 버튼 클릭시 true로 변경되면서 팝업)
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  // ! ----------- 카카오 우편번호 API ------------------------------
  const scriptUrl =
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setUserInfo({ ...userInfo, address: fullAddress }); // 가져온 fullAddress를 state에 저장!
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  // console.log(userInfo);
  // ! ------------------ 가입하기 버튼 --------------------------
  // 모든 항목을 만족했을 때만 submit!
  const SubmitData = (e) => {
    e.preventDefault();
    if (
      userInfo.address.length > 0 &&
      isIdValid &&
      isPwValid &&
      isConfirmPwValid &&
      isNickNameValid &&
      isEmailValid === true
    ) {
      if (isIdUsable && isEmailUsable) {
        dispatch(joinThunk({ userId, nickName, password, email, address }));
      } else {
        alert("중복검사를 실시해주세요.");
      }
    } else {
      alert("모든 항목을 작성해주세요.");
    }
  };

  const isJoinSucceed = useSelector((state) => state.join.isJoinSucceed);
  useEffect(() => {
    if (isJoinSucceed) {
      dispatch(resetJoinState());
      nav("/login");
    }
  }, [isJoinSucceed]);
  // ! ------------ 여기부터 뷰 -----------------
  return (
    <div>
      <StRow>
        <LabelWrapper>
          <label>
            아이디
            <span>*</span>
          </label>
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
            }}
            disabled={isIdUsable}
          >
            중복확인
          </Btn>
        </BtnWrapper>
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            비밀번호
            <span>*</span>
          </label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="password"
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
          <label>
            비밀번호확인
            <span>*</span>
          </label>
        </LabelWrapper>

        <InputWrapper>
          <Input
            type="password"
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
          <label>
            닉네임
            <span>*</span>
          </label>
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
        <BtnWrapper />
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            이메일
            <span>*</span>
          </label>
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
          <Btn
            type="button"
            onClick={() => {
              emailCheck();
              // SendEamilAuth();
            }}
            disabled={isEmailUsable}
          >
            중복확인
          </Btn>
        </BtnWrapper>
        {/* --------- 모달창 ------------- */}
        {/* {modal ? (
          <Modal modal={modal} setModal={setModal}>
            {emailRuleDesc}
          </Modal>
        ) : null} */}
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>주소</label>
          <span>*</span>
        </LabelWrapper>
        <InputWrapper>
          <Btn
            width="100%"
            fontSize="14px"
            fontWeight="500"
            type="button"
            onClick={handleClick}
          >
            <SearchImg
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
      <Agreement />
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
export default JoinForm;
const Line = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid rgb(51, 51, 51);
`;

const SearchImg = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  vertical-align: middle;
`;
