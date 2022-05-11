import classes from "./AuthForm.module.css";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
const LOGIN_URL = "/api/Account/login";

const AuthForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

   
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  //Manager: boss@m.dk  asdfQWER
  //Model: nc@m.dk  Pas123
  //https://localhost:7181/api/Account/login
  return (
    <>
      {success ? (
        <section>
          <h1>Du er logget ind</h1>
          <br />
          <p>
            <a href="/">Gå til forsiden</a>
          </p>
        </section>
      ) : (
        <section className={classes.auth}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Log Ind Her..</h1>

          <form onSubmit={handleSubmit}>
            <div className={classes.control}>
              <label htmlFor="username">E-mail:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="on"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Kode:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className={classes.actions}>
              <button>Log Ind</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default AuthForm;
