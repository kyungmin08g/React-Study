import "../styles/Login.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";

export default function Login() {
  let [count, setCount] = useState(0);

  /**
   * useEffect()
   * 해당 함수가 호출될때 같이 호출되는 녀석이다.
   * 파라미터로는 콜백 함수와 리스트를 받는데 리스트는 선택이다. 리스트는 해당 리스트에 속해 있는 것의 상태가 변경될시 호출된다.
   * 리스트를 입력하지 않으면 항상 해당 함수가 호출되면 같이 호출되는 Hook으로 된다.
   * 형식: useEffect(() => {}, [상태 변경될 변수]);
   */
  useEffect(() => {
    console.log("출력");
  }, [count]);

  return (
    <div className="container-main">
      <div className="container">
        <form action={ "#" } method="GET">
          <div className="login-title">
          <p className="title">Login</p>
          </div>
          <div className="input-components">
            <Input type="text" message="아이디를 입력하세요." />
          </div>
          <div className="input-components">
            <Input type="password" message="비밀번호를 입력하세요." />
          </div>
          <div className="button-box">
            <Button title="Login" event={() => {
              if (count === 0) setCount(++count);
              console.log(`count: ${count}`);
            }} />
          </div>
        </form>
      </div>
    </div>
  );
};