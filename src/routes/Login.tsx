import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";
import LoginFailAlarm from "../components/Login/LoginFailAlarm";

export default function Login() {
  const [id, setId] = useState("");
  const [passwd, setPasswd] = useState("");
  const [loading, setLoading] = useState(true);
  const [runLogin, setRunLogin] = useState(false);
  const [failedAlarm, setFailedAlarm] = useState(false);
  const [goMainFlag, setGoMainFlag] = useState(false);

  useEffect(() => {
    if (failedAlarm) {
      setTimeout(() => {
        setFailedAlarm(false);
      }, 1000);
    }
  });

  // clean-up
  useEffect(() => {
    return () => {
      setRunLogin(false);
    };
  }, []);

  const login = () => {
    setRunLogin(true);
  };

  const goMain = () => {
    setGoMainFlag(true);
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {failedAlarm && <LoginFailAlarm />}
      {loading ? (
        <Loading />
      ) : (
        <LoginMain
          id={id}
          passwd={passwd}
          setId={setId}
          setPasswd={setPasswd}
          login={login}
        />
      )}
      {runLogin && (
        <RunLogin
          userId={id}
          passwd={passwd}
          runLogin={runLogin}
          setRunLogin={setRunLogin}
          setFailedAlarm={setFailedAlarm}
          goMain={goMain}
        />
      )}
      {goMainFlag && (
        <Redirect to={{ pathname: "/main", state: { idFromLogin: id } }} />
      )}
    </>
  );
}
