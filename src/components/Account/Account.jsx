import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getMyPosts } from "../../actions/PostAction";
import Posts from "../Posts/Posts";
import User from "../User/User";
import "./Account.css";
import PersonalDetails from "./PersonalDetails";
const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.myPosts);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  console.log("Post", posts);

  return (
    <div className="account">
      <div className="accountleft">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Posts
              key={post._id}
              postImage={post.image.url}
              ownerName={post.owner.name}
              caption={post.caption}
              postId={post._id}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownerId={post.owner._id}
            />
          ))
        ) : (
          <Typography>No Post</Typography>
        )}
      </div>
      <div className="accountRight">
        <PersonalDetails user={user} />
      </div>
    </div>
  );
};

export default Account;
