# Front End

## 형진하

### 공통

- 마켓컬리 보라색 : rgb(95, 0, 128), #5F0080
- 마켓컬리 기본 글자색 : rgb(51, 51, 51), #333333

### Features

- 회원가입
  - axios post
  - 유효성검증/limited input
  - 중복확인(서버와)
  - 주소찾기(kakao api이용)
- 로그인

### Trouble

#### 회원가입

- 1. [에러] Manifest: Line: 1, column: 1, Syntax error.
     출처: https://anerim.tistory.com/209 [디발자 뚝딱:티스토리]

- 2. [에러] db에 내가 보내는 유저 정보들이 쌓이는 걸 보고싶은데 계속 덮어씌이기만 함(8/20)
     - 원인1. db.json의 "user"부분 자체가 {}로만 되어있고 []로 감싸져 있지 않았음. 근데 사실 이건 내가 {}로만 보내도 백에서 알아서 해줄 문제이긴 하지만 거슬렸음..
     - 원인2. slice부분에서 return state만 함. 이것도 백이랑 연결되면 상관없기는 한데 지금은 로컬에서 테스트를 해봐야하니깐 문제
       `initialState= {id:"", nickname"", pw:""}` 이걸 그냥
       `initialState= {user:[]}`로 변경했음
       어차피 dispatch를 통해서 들어오는 애들이 저 안으로 들어오는 거여서 저 부분이 비어있어도 괜찮음!

- 3. [에러] Uncaught (in promise) Error: [Immer] An immer producer returned a new value _and_ modified its draft. Either return a new value _or_ modify the draft.
     - db에 값은 들어가는데 자꾸 이 메시지가 뜬다....왜??????와이????찾아봐야됨...

- 4. 내가 보기에는 모든 항목을 만족했는데도 안넘어가고 메세지가 뜸 ㅜㅜㅜ

  - 원인> 같은 로직을 복사+붙여넣기 하는 과정에서 email부분에 nickname유효성체크를 하는 부분을 똑같이 넣어서 이메일부분을 입력하면 닉네임부분이 다시 false로 넘어가게 됨=>console.log로 찍어보면서 찾아봤음 흑흑
  - 해결> 그 부분 고치니까 너무 잘됨 ㅜㅜ

- 4. 모달창 구현
     참고(https://velog.io/@tlatjdgh3778/React%EC%97%90%EC%84%9C-Modal-%EA%B5%AC%ED%98%84)

- .match()랑 .test()차이가 뭐냐?
- onKeyUp, keydown, keypress의 차이는?

- 이정민매니저님 깃(https://github.com/social-bookmark-9/frontend/tree/main/src/redux)

```

```
