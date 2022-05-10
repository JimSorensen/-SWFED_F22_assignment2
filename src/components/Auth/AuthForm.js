import { useState, useRef } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false); 

  const authSubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if(isLogin){
      url = 'https://localhost:7181/api/Account/login';
    }else{
      url = 
      fetch('https://localhost:7181/api/Managers',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type' : 'application/json'
          }
        }
      ).then(res => {
        setIsLoading(false);
        if (res.ok){
          ///.....
        }else{
          return res.json().then(data => {
            let errorMessage = 'Dit login fejlede!...';
            if (data && data.error && data.error.message){
            errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
  }

  return (
    <section className={classes.auth}>
      <h1>Log ind her</h1>
      <form onSubmit={authSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Din Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Din kode</label>
          <input type="password" id="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button> Login </button>
          {isLoading && <p>Sending request....</p>}          
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
