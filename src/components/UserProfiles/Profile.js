import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Posts from '../Posts/Posts';
import PersonalProfile from './PersonalProfile';
const Profile = () => {
    const {id}=useParams();
    console.log(id);

    const [user,setUser]=useState([]);
    const [posts,setPost]=useState([])
    const token=localStorage.getItem('auth-token')
    useEffect(() => {
        const getPosts = async () => {
          try {
            const resp = await fetch(`http://localhost:4000/api/user/${id}`, {
              method: "GET",
              headers: {
                "Content-Type": "Application/Json",
                "auth-token": token,
              },
            });
    
            const data = await resp.json();
        
       setPost(data.posts)
            setUser(data.user);
          
          } catch (error) {
            console.log(error);
          }
        };
    
        getPosts();
      }, []);
      console.log(posts);
      console.log(user)
  return (
    <div className='account'>
          <div className="accountleft">
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
      </div>
      
      <div className='accountright'> 
      <PersonalProfile/>
      
     </div>
      
    </div>
  )
}

export default Profile
