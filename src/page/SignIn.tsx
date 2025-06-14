import "../styles/Login.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const { id, page } = useParams();
  let [count, setCount] = useState(0);
  console.log("체크");

  return (
    <div className="container-main">
      <div className="container">
        <form action={ "#" } method="GET">
          <div className="login-title">
            <p className="title">Sign In</p>
          </div>
          <div className="input-components">
            <Input type="text" message="아이디를 입력하세요." />
          </div>
          <div className="input-components">
            <Input type="password" message="비밀번호를 입력하세요." />
          </div>
          <div className="button-box">
            <Button title="Sign In" event={() => {
              setCount(++count);
              console.log(`count: ${count}`);
            }}/>
          </div>
        </form>
        <p>ID: { id }, Page: { page }</p>
        {(count % 2 === 0) ? <div>
          <p>카운트: { count }</p>
        </div> : <></>}
      </div>
    </div>
  );
};