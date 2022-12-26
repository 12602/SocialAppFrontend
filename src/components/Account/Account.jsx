import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Posts from "../Posts/Posts";
import User from "../User/User";
import "./Account.css";
import PersonalDetails from "./PersonalDetails";
const Account = () => {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("auth-token");

  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await fetch("http://localhost:4000/api/myPosts", {
          method: "GET",
          headers: {
            "Content-Type": "Application/Json",
            "auth-token": token,
          },
        });

        const data = await resp.json();

        setPosts(data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

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
        <PersonalDetails/>
      </div>
    </div>
  );
};

export default Account;
