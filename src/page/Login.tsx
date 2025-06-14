import "../styles/Login.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";

export default function Login() {
  let [count, setCount] = useState(0);

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
              if (count === 0) {
                setCount(++count);
              }
              console.log(`count: ${count}`);
            }} />
          </div>
        </form>
      </div>
    </div>
  );
};