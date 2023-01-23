import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [action, setAction] = useState("Sign In");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    setAction("Create Account");
  }

  return (
    <div>
      <div className="logo">
        <img src="/trackie-logo.jpg" className="trackie-logo" alt="" />
        Trackie
      </div>
      <div className="login-main">
        <div className="left-login">
          <div>
            <h1 className="title">{action}</h1>
            {action === "Sign In" && (
              <div className="signup">
                <div>New User?</div>
                <div className="create-account" onClick={signUp}>
                  Create Account
                </div>
              </div>
            )}
          </div>

          <input
            className="login-input"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="login-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/personal" style={{ textDecoration: "none" }}>
            <div className="login-button">{action}</div>
          </Link>

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
