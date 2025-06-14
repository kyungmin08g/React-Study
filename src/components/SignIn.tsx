import "../styles/Login.css";
import Input from "./Input";
import Button from "./Button";
import { useParams } from "react-router-dom";

export default function SignIn() {
  const { id, page } = useParams();

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
            <Button title="Sign In" />
          </div>
        </form>
        <p>ID: { id }, Page: { page }</p>
      </div>
    </div>
  );
};