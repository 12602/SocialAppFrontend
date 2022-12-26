import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Posts/Post.css";
import {MoreVert,Favorite,FavoriteBorder,ChatBubbleOutline,DeleteOutline}from '@mui/icons-material';
import User from '../User/User'
import { toast } from 'react-toastify';
import CommentCard from "../Comments/CommentCard";
import InfiniteScroll from 'react-infinite-scroll-component';
const Posts = ({
  postId,
  caption,
  postImage,
  likes ,
  comments,
  ownerImage,
  ownerName,
  ownerId,
  isDelete = false,
  isAccount = false,
}) =>
{
 
    const [like, setLike] = useState(false);
    const [postDelete, setPostDelete] = useState(false);
    const [likesUser, setLikesUser] = useState(false);
    const [commentToggle,setCommentToggle]=useState(false);
    const [commentValue, setCommentValue] = useState('');
  
  const token=localStorage.getItem('auth-token');
  
  useEffect(() => {
   
  }, [postDelete]);
  const notify = (msg) => toast(msg);
    const likeHandler=async(id)=>{
      console.log(id);
  
      const resp=await fetch(`http://localhost:4000/api/posts/${id}`,{
        method:"GET",
        headers:{
          "Content-Type":"Application/Json",
          "auth-token":token
        },
        
      });
    
      const data=await resp.json();
      if(resp.status!==200){
        return ;

      }     
     if(data.message==='Post is liked'){
      console.log('post is liked')
    setLike(true);
     }
     else
     {
   console.log('Post is unliked')
      setLike(false);
     }
    
    }

    const addCommentHandler=async(e)=>{
      try {
        e.preventDefault();
        
      
        const resp=await fetch(`http://localhost:4000/api/posts/comment/${postId}`,{
          method:"PUT",
          headers:{
            "Content-Type":"Application/Json",
            "auth-token":token
          },
          body:JSON.stringify({"comment":commentValue})
        });
      
      
       const data=await resp.json();
       console.log(data)
        if(resp.status!==200){
        notify("Comment Fail !!!")
        }
        else{
         notify("comment sucesfully!!")
        }
        
      } catch (error) 
      {
        notify("Internal Server Error!!!!")
        console.log("error in commenting"+error)
      }
    
}

//delete post
const deletePost=async()=>{
  
  const resp=await fetch(`http://localhost:4000/api/posts/${postId}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"Application/Json",
      "auth-token":token
    },
    
  });
  const data=await resp.json();
  window. location. reload()
  
}
  
  return (
    <div>
        <div className="post">
         
      <div className="postHeader">

       
      </div>
      <img src={postImage} alt="post" />
      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="user"
          sx={{ height: "3vmax", width: "3vmax" }}
        />

        <Link to={`/user/${ownerId}`}>
          <Typography variant="h5" style={{color:"grey",position:'relative', top:'-10px'}}>{ownerName}</Typography>
        </Link>
        <Typography
          fontWeight={100}
          color="rgba(0,0,0,0.580)"
          style={{ alignSelf: "center",position:'relative',color:'black', top:'15px' }}
        >
          {caption}
        </Typography>
      </div>
     
        <button
        onClick={()=>setLikesUser(!likesUser)}
        style={{border:"none",
      backgroundColor:"white",
      cursor:"pointer",
      "margin":"1vmax 2vmax"
      }}
        >
        <Typography>
        {likes.length} likes
        </Typography>
       </button> 

       <div className="postFooter">
        
        <Button onClick={()=>likeHandler(postId)}>
         
         {
          like ? <Favorite/>:  <FavoriteBorder/>
         }
        </Button>
        {/* {handling comments} */}
        <Button onClick={()=>setCommentToggle(!commentToggle)}>
          <ChatBubbleOutline/>
        </Button>
        {/* {handling delete} */}

        <Button onClick={deletePost}>
         
        <DeleteOutline/>
       </Button>
        
       </div>    
       
       </div>
       <Dialog open={likesUser} onClose={()=>setLikesUser(!likesUser)}>
        <div className='DialogBox'>
         <Typography variant="h4">
            Liked By
            {
              likes.map((like)=>((
                <User
                key={like._id}
                userId={like._id}
                name={like.name}
                avatar={like.avatar.url}
               />
              )))
            }
              </Typography>
           
         

        </div>
       </Dialog>
       <Dialog
        open={commentToggle}
        onClose={() => setCommentToggle(!commentToggle)}
      >
        <div className="DialogBox">
          <Typography variant="h4">Comments</Typography>

          <form className="commentForm" onSubmit={addCommentHandler}>
            <input
              type="text"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder="Comment Here..."
              required
            />

            <Button type="submit" variant="contained">
              Add
            </Button>
          </form>

          {comments.length > 0 ? (
            comments.map((item) => (
              <CommentCard
                userId={item.user._id}
                name={item.user.name}
                avatar={item.user.avatar.url}
                comment={item.comment}
                commentId={item._id}
                key={item._id}
                postId={postId}
                isAccount={isAccount}
              />
            ))
          ) : (
            <Typography>No comments Yet</Typography>
          )}
        </div>
      </Dialog>

    </div>
  );
};

export default Posts;
