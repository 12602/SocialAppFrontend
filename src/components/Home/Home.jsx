import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Posts from '../Posts/Posts'
import User from '../User/User';

import './Home.css'

const Home = () => {

const token=localStorage.getItem('auth-token');
const [posts, setPosts] = useState([])
const [users, setUsers] = useState([])
 
useEffect(()=>{
  const getFollowingPosts=async()=>{
    const resp=await fetch('http://localhost:4000/api/posts',{
      method:"GET",
      headers:{
        "Content-Type":"Application/Json",
        "auth-token":token
      },
      
    });
  
    const data=await resp.json();
    console.log(data);
    setPosts(data.post);
  }

  getFollowingPosts();
   


  

 },[]);
 useEffect(() => {
     const getAllUsers=async(req,resp)=>{
      const get=await fetch('http://localhost:4000/api/users',{
        method:"GET",
        headers:{
          "Content-Type":"Application/Json",
          "auth-token":token
        },
        
      });
    
      const data=await get.json();
      setUsers(data.users)
    }
   getAllUsers();
  
 

 },[]);

 
  


 console.log(posts,users);
  return (
    <div className='home'>
        <div className="homeleft">
        <InfiniteScroll dataLength={posts.length}>
           {
            
            posts && posts.length>0? posts.map((post)=>((
            <Posts key={post._id}
              postImage={post.image.url}
            ownerName={post.owner.name}
            caption={post.caption}
            postId={post._id}
            likes={post.likes}
            comments={post.comments}
            ownerImage={post.owner.avatar.url}
            ownerId={post.owner._id}

            />))):<Typography variant="h6">No Posts Yet</Typography>
            
           }
          </InfiniteScroll>
        </div>
        <div className="homeright">
          {
            users && users.length>0 ? users.map((user)=>((
              <User
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
             />
            ))):<Typography variant="h6">No Users Yet</Typography>
          }
      
        </div>
      
    </div>
  )
}

export default Home
