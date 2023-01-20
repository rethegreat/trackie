import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div>
      <div className="logo">
        <img src="/trackie-logo.jpg" className="trackie-logo" alt="" />
        Trackie
      </div>
      <div className="login-main">
        <div className="left-login">
          <div>
            <h1 className="title">Sign In</h1>

            <div className="signup">
              <div>New User?</div>
              <div className="create-account">Create Account</div>
            </div>
          </div>

          <input className="login-input" placeholder="Email" />

          <input
            className="login-input"
            placeholder="Password"
            type="password"
          />
          <div className="login-button">Sign In</div>

          <div></div>
        </div>

        <div className="right-login">
          <img src="/login_shopping.jpg" className="shopping-image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
