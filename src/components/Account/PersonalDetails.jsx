import React, { useEffect, useState } from 'react'
import { Avatar, Button, Dialog, Typography } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import Posts from "../Posts/Posts";
import User from "../User/User";
import "./Account.css";


const PersonalDetails = () => {
    const [user, setUser] = useState([]);
    const navigate=useNavigate()
    const token=localStorage.getItem('auth-token')
    const [loading,setLoading]=useState(false);
  const [followersToggle, setFollowersToggle] = useState(false)
  const [followingToggle, setFollowingToggle] = useState(false)
    useEffect(()=>{

    const getUser=async()=>{
        try {
          const resp=await fetch('http://localhost:4000/api/user/profile',{
            method:"GET",
            headers:{
              "Content-Type":"Application/Json",
              "auth-token":token
            },
            
          });
        
          const data=await resp.json();
          setLoading(true)   
          setUser(data.user);
          
        } catch (error) {
          console.log(error)
          
        }
    }
    
      getUser();
      


     },[]);


     //delete profile
     const deleteProfileHandler=()=>{

     }
//logout 
     const logoutHandler=()=>{
      localStorage.clear();
      navigate("/login")


     }

     console.log(user);
  return (
    <div>
     <div className='accountright'> 
       {
        loading && user &&
        <>
        <Avatar sx={{ bgColor:'orange'}}>N</Avatar>

        <Typography variant="h5">{user.name}</Typography>

        <div>
          <button onClick={() => setFollowersToggle(!followersToggle)}>
            <Typography>Followers</Typography>
          </button>
          <Typography>{user.followers.length}</Typography>
        </div>

        <div>
          <button onClick={() => setFollowingToggle(!followingToggle)}>
            <Typography>Following</Typography>
          </button>
          <Typography>{user.following.length}</Typography>
        </div>

        <div>
          <Typography>Posts</Typography>
          <Typography>{user.posts.length}</Typography>
        </div>

        <Button variant="contained" onClick={logoutHandler}>
          Logout
        </Button>

        {/* <Link to="/update/profile">Edit Profile</Link>
        <Link to="/update/password">Change Password</Link> */}

        <Button
          variant="text"
          style={{ color: "red", margin: "2vmax" }}
          onClick={deleteProfileHandler}
          
        >
          Delete My Profile
        </Button>
        </>
      }

{/* <Dialog
          open={followersToggle}
          onClose={() => setFollowersToggle(!followersToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Followers</Typography>

            {user && user.followers.length > 0 ? (
              user.followers.map((follower) => (
                <User
                  key={follower._id}
                  userId={follower._id}
                  name={follower.name}
                  avatar={follower.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax" }}>
                You have no followers
              </Typography>
            )}
          </div>
        </Dialog> */}

        {/* <Dialog
          open={followingToggle}
          onClose={() => setFollowingToggle(!followingToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Following</Typography>

            {user && user.following.length > 0 ? (
              user.following.map((follow) => (
                <User
                  key={follow._id}
                  userId={follow._id}
                  name={follow.name}
                  avatar={follow.avatar.url}
                />
              ))
            ) : (
              <Typography style={{ margin: "2vmax" }}>
                You're not following anyone
              </Typography>
            )}
          </div>
        </Dialog> */}
        </div>
      
    </div>
  )
}

export default PersonalDetails
