import React, { useState } from "react";
import { useUserAuth } from "../../context/context";
import { useNavigate } from "react-router-dom";
import "./login.style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { LogIn, user, LogOut } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await LogIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await LogOut();
      navigate("/in/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="sign-inp sign"
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="sign-inp sign"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            className="sign-in-btn sign"
            type="submit"
            >Sign In</button>
        </form>
        {user && (
          <>
            <p>{user.email}</p>
            <button 
            className="sign-in-btn sign"
            onClick={handleLogout}>LogOut</button>
          </>
          )}
        {error && <p>{error}</p>}
        <div className="login-support">
          <div className="remember-me">
            <input type="checkbox" />
            Remember me
          </div>
          <p>Need help?</p>
        </div>

        <div className="other-content">
          <p className="fb">Login with Google</p>
          <p>
            <span>New to Netflux?</span> Sign up now
          </p>
          <p className="recaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="/">Learn More</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
