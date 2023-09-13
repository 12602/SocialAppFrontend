import "./Login.css";
import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../actions/UserAction";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (msg) => toast(msg);

  //handling login
  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      notify("Please fill email and password !!!");
    }

    dispatch(LoginUser(email, password,navigate));
      //navigate("/home");
      notify("wrong details!")
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3">Social Media App</Typography>

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/forgot/password">
          <Typography variant="h6" style={{ padding: "2vmax" }}>
            Forget Password
          </Typography>
        </Link>

        <Button type="submit">Login</Button>
        <Link to="/register">
          <Typography variant="h6" style={{ padding: "2vmax" }}>
            Register New User
          </Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
