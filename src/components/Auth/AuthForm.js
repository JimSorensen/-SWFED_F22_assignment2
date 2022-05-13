import classes from "./AuthForm.module.css";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
const LOGIN_URL = "/api/Account/login";

const AuthForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: email, password: password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      let token = await response?.data;
      localStorage.setItem("token", token.jwt);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user: email, pwd: password, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Unauthorized");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  /*
async login() {
let url = "https://localhost:44368/api/account/login";
try {
let response = await fetch(url, {
method: "POST",
body: JSON.stringify(this.form), // Assumes data is in an object called form
headers: new Headers({
"Content-Type": "application/json"
})
});
if (response.ok) {
let token = await response.json();
localStorage.setItem("token", token.jwt);
// Change view to some other component // …
} else {
alert("Server returned: " + response.statusText);
}
} catch (err) {
alert("Error: " + err);
}
return;
*/
  //-------------------------------------------------
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
                value={email}
                required
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Kode:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={password}
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
