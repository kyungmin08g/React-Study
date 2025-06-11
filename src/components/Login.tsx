import "../styles/Login.css";
import Input from "./Input";
import Button from "./Button";

export default function Login() {
  return (
    <div className="container-main">
      <div className="container">
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
          <Button title="Login"></Button>
        </div>
      </div>
    </div>
  );
};