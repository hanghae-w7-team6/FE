import { useCallback, useState } from "react";

const useInput = (initialData) => {
  //초기값, value는 useState로 관리
  const [value, setValue] = useState(initialData);

  //핸들러 로직 구현.. ->근데 여기서 useCallback을 왜쓰지?
  const handler = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);
  //1. 이 훅은 [ ]를 반환하는데, 첫번째는 value, 두번째는 handler, 세번째는 setValue(굳이 안 넣어도 된단다)
  return [value, handler, setValue];
};

export default useInput;

// 커스텀훅인 useInput은 input을 업데이트해준다..
