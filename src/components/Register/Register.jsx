import "./Register.css";
import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { RegisterUser } from "../../actions/UserAction";
import { useDispatch } from "react-redux";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const token=localStorage.getItem("auth-token")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (msg) => toast(msg);
  //handling login
  const dispatch = useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      notify("Please fill email and password and name !!!");
    }
    dispatch(RegisterUser(name, email, password));
    if(token)
    {
     navigate("/")
    }else{
      navigate("Email Address is Already Registered!!!Try Another!!!");
    }
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
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <Link to="/forgot/password">
          <Typography variant="h6" style={{ padding: "2vmax" }}>
            Forget Password
          </Typography>
        </Link> */}

        <Button type="submit">
          {" "}
          <Typography variant="h6"> Register </Typography>
        </Button>
        <Link to="/login">
          <Typography variant="h6" style={{ padding: "2vmax" }}>
            Already Have An Account? Login Now?
          </Typography>
        </Link>
      </form>
    </div>
  );
};

export default Register;