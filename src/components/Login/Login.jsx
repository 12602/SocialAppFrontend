import "./Login.css";
import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("");

  const notify = (msg) => toast(msg);
//handling login
  const loginHandler=async(e)=>{

  e.preventDefault();
     if(!email || !password){
      alert('Please fill email and password !!!')
     }
    const resp=await fetch('http://localhost:4000/api/user/login',{
      method:"Post",
      headers:{
        "Content-Type":"Application/Json"
      },
      body:JSON.stringify({'email':email,'password':password})
    });
    const data=await resp.json();
     //response status 
  if(resp.status===200){
    console.log("heelo")
    notify("Login Succesfully!!!");
    localStorage.setItem("auth-token",data.token);
    navigate("/");
  
  }else{

    notify("Login Failed")
  }

}
  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3">Social Media App</Typography>

        <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

        <input type="password" placeholder="password"value={password}  onChange={(e)=>setPassword(e.target.value)}required />
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
