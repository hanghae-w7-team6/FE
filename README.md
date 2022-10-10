# 항해 7주차 클론코딩 Front End

## 🛠 Stack

- <strong>Client</strong>
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
</p>

- <strong>UI</strong>

<p>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</p>

- <strong>Deploy</strong>

<p>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
</p>



</br>

## 김대은

### Features
- 메인페이지
  - 메인배너 알고리즘 슬라이드 useInterval 을 이용한 오토 슬라이드 구현
  - 메인배너 슬라이드 마우스 호버 시 타이머 정지 및 버튼 클릭시 타이머 리셋
  - 상품 제안 react-slick 
  - 카테고리별 정렬 기능
  - 24시간 기준 타이머 구현
- 카트 페이지
  - 카트에 담은 아이템을 localstorage 에 저장
  - 저장한 데이터를 바탕으로 추가 및 삭제 기능 구현
  - 데이터에 따른 금액 변동
- 신상품 페이지
  - 인피니티 스크롤 구현
- 상품 등록 페이지
 
### Trouble
- 카트 아이템의 수량을 변경할 경우, 같은 상품의 경우 수량만 변경 하여야함
  - 로컬스토리지의 데이터에 아이템의 아이디를 비교하여 같을경우 수량만 변경하게 조정
- 카트에 담은 상품의 합계 금액을 실시간으로 나타내어야함
  - 로컬스토리지에 담을때, 리듀서를 활용하여 합계 된 금액을 전역에서 사용할 수 있게 조정
- 카트에 담은 수량이 새로고침 될 경우 초기화 되는것을 방지 해야함
  - 로컬 스토리지에 저장되어 있지 않은경우 초기값으로 1을 가져오고 저장이 되있을경우 로컬 스토리지에 저장된 값을 세팅
- instance Head 에러
  - instance.jsx 에 헤더 에 토큰 값을 넣어놨는데, 로그인 할 경우 토큰 값이 저장이 안된다. 새로고침을 해야만 토큰값이 인스턴스 헤드에 적용이 됨.
    app.js ,index.js 에 다 넣어봤지만 작동을 하지 않았고, 공통적으로 렌더링이 되는 헤드 부분에 넣으니 작동은 잘 되었다만 이게 맞는건가 싶다.

## 한효승

### Features

- 디테일페이지
  - DB의 Product 데이터를 불러와 API에 맞게 배치
  - react-modal 라이브러리를 사용한 전용모달 제작
  - 로컬스토리지 통해 로그인여부 조회로 장바구니 담기 기능 제한
  
- 카트페이지
  - CSS 작업
  
### Trouble
- 한줄평이 없는 상품의 경우에는 전체가 렌더링이 되지않음
  - 옵셔널체이닝을 이용해 한줄평이 필수값이 아니여도 괜찮도록 

## 형진하

### Features

- 회원가입페이지
  - 유효성검증
  - 중복확인
  - 주소찾기(kakao 우편번호 api이용)
- 로그인페이지

### Trouble

> axios instance 설정 후, `POST http://localhost:3000/%22서버API%22user/login 404 (Not Found)` 에러 발생

서버로 데이터 요청시 url에 붙은 "표시를 유니코드로 인코딩되어 url에 포함되어 같이 인식 됨<br>
=> [해결] node_modules와 .env 삭제 후 재설정

<br>

> 카카오 우편번호API를 이용하여 기본주소를 가져오고 거기에 상세주소를 추가로 입력하여 이 두 문자열을 합쳤을 때, 무한 랜더링 발생

```js
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
```

이런 식으로 인풋을 한 곳에서 모두 관리하려고 해서 새로운 데이터를 받아야 할 때 불필요한 랜더링이 발생하면서 무한 루프에 빠짐
<br>
=>[해결] useInput 커스텀 훅을 사용하여 각각의 인풋 상태를 개별 관리
