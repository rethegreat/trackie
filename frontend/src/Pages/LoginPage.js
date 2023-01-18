import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-main">
      <div className="left-login">
        <h1>Sign In</h1>

        <div className="signup">
          <div>New User?</div>
          <div>Sign up here</div>
        </div>

        <input placeholder="Email"/>
        
        <input placeholder="Password"/>
        <div>Login</div>

        <div></div>
      </div>

    <div className="right-login">
        <img src="/login_shopping.jpg" className="shopping-image" alt=""/>
    </div>
      
    </div>
  );
}

export default LoginPage;
