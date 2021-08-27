import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css";

interface propTypes {
  id: string;
  passwd: string;
  setId: (id: string) => void;
  setPasswd: (passwd: string) => void;
  login: () => void;
}

export default function LoginMain({
  id,
  setId,
  passwd,
  setPasswd,
  login,
}: propTypes) {
  return (
    <>
      <div className="loginMain fullsize">
        <section className="idAndPasswd">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="idInput"
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="idInput">아이디</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="passwdInput"
              placeholder="비밀번호"
              onChange={(e) => setPasswd(e.target.value)}
            />
            <label htmlFor="passwdInput">비밀번호</label>
          </div>
          <div className="buttonContainer d-grid gap-2">
            <button
              type="button"
              className="loginButton btn btn-info"
              onClick={() => login()}
            >
              로그인
            </button>
          </div>
        </section>
        <section className="wannaJoin">
          <span>혹시 조교도시락이 처음이신가요?</span>
          <Link to="/join">회원가입</Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
