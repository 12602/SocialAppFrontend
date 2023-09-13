import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers, getFollowingPosts } from "../../actions/UserAction";
import Posts from "../Posts/Posts";
import User from "../User/User";


import { getAllPost } from '../../actions/PostAction';

import "./Home.css";

const Home = () => {
  const token = localStorage.getItem("auth-token");
  //getting the id of current user
  const { user } = useSelector((state) => state.user);
 
  //const posts=[];
  let id;
  //get
  if (user) id = user._id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, [dispatch, id]);

  const { loading, error } = useSelector(
    (state) => state.postOfFollowing
  );
  const { users } = useSelector((state) => state.getAllUser);
    
  // if (!posts) {
  //
  // }
  
  useEffect(() => {
     
    dispatch(getAllPost());
},[]);
const {getAllPosts}=useSelector((state)=>state.getAllPosts);  
  if(!getAllPosts)
  return;
let {posts}=getAllPosts;
console.log(posts);

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  
  
  
  return (
    <div className="home">
      <div className="homeleft">
        {posts && (
          <InfiniteScroll dataLength={posts.length}>
            {posts &&
              posts.map((post) => (
                <Posts
                  key={post._id}
                  postImage={post?.image?.url}
                  ownerName={post.owner.name}
                  caption={post.caption}
                  postId={post._id}
                  likes={post.likes}
                  comments={post.comments}
                 ownerImage={post?.owner?.avatar?.url}
                  ownerId={post.owner._id}
                />
              ))}
          </InfiniteScroll>
        )}
      </div>
      <div className="homeright">
      <h1 style={{textAlign:'center',color:'green'}}>All Users</h1>
        {users && users.length > 0 ? (
          users.map((user) => {
            if (id !== user._id) {
              return (
                <User
                  userId={user._id}
                  name={user.name}
                  avatar={user.avatar.url}
                />
              );
            }
          })
        ) : (
          <Typography variant="h6">No Users Yet</Typography>
        )}
      </div>
    </div>
  );
};

export default Home
