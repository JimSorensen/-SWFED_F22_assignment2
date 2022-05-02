import { useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Din Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Din kode</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button> {isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchModeHandler}
          >
            {isLogin ? "Opret Ny Konto" : "Log ind med en konto"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
