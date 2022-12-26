import React, { useEffect, useState } from 'react'
import { Avatar, Button, Dialog, Typography } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import Posts from "../Posts/Posts";
import User from "../User/User";
import "./Profile.css";


const PersonalProfile = () => {
    const [user, setUser] = useState([]);
    const {id}=useParams();
    
    const navigate=useNavigate()
    const token=localStorage.getItem('auth-token')
    const [loading,setLoading]=useState(false);
  const [followersToggle, setFollowersToggle] = useState(false)
  const [followingToggle, setFollowingToggle] = useState(false);
  const [follow,setFollow]=useState(false)
 
    useEffect(()=>{
    

    const getUser=async()=>{
        try {
          const resp=await fetch(`http://localhost:4000/api/user/getUser/${id}`,{
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


     const followHandler=async(id)=>{
      
      try {
        const resp = await fetch(`http://localhost:4000/api/user/follow/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/Json",
            "auth-token": token,
          },
        });
  
        const data = await resp.json();
    
     console.log(data.message);
     if(data.message==='User Unfollowed')
     {

      setFollow(false);
     }
     else
     {
      setFollow(true);
     }
      
      } catch (error) {

        console.log(error);
      }
    }   
     

     
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

        <Button variant="contained" onClick={()=> followHandler(user._id)}>
          {
            follow ? 'Follow':'Unfollow'
          }
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

export default PersonalProfile
