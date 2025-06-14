import "../styles/Login.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  
  /**
   * useParams()
   * URL에 담겨있는 파라미터를 얻는 Hook
   */
  const { id, page } = useParams();

  /**
   * useNavigate()
   * 뒤로가기/앞으로가기 등을 지원하는 Hook이다.
   */
  const navigate = useNavigate();

  /**
   * useState()
   * 상태가 변경될 수 있는 값을 다룰 수 있는 Hook(?)
   * 형식: let [변수, 변경 함수] = useState(초기값);
   * useState()는 상태가 변경되면 페이지를 재로딩한다.
   */
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
      <ul>
          <li><button onClick={() => navigate(-2)}>뒤로 2번</button></li>
          <li><button onClick={() => navigate(-1)}>뒤로 1번</button></li>
          <li><button onClick={() => navigate(1)}>앞으로 1번</button></li>
          <li><button onClick={() => navigate(2)}>앞으로 2번</button></li>
      </ul>
    </div>
  );
};