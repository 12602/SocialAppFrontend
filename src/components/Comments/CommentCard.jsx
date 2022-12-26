import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CommentCard.css";
import { Delete } from "@mui/icons-material";



const CommentCard = ({
  userId,
  name,
  avatar,
  comment,
  commentId,
  postId,
  isAccount,
}) => {
 
  

  return (
    <div className="commentUser">
      <Link to={`/user/${userId}`}>
        <img src={avatar} alt={name} />
        <Typography style={{ minWidth: "6vmax" }}>{name}</Typography>
      </Link>
      <Typography>{comment}</Typography>

  
    </div>
  );
};

export default CommentCard;