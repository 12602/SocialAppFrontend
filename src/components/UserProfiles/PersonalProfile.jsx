import React, { useEffect, useState } from 'react'
import { Avatar, Button, Dialog, Typography } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import Posts from "../Posts/Posts";
import User from "../User/User";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { followAndUnfollowUser } from "../../actions/UserAction";

const PersonalProfile = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const token = localStorage.getItem("auth-token");
  const [loading, setLoading] = useState(false);
  const [followersToggle, setFollowersToggle] = useState(false);
  const [followingToggle, setFollowingToggle] = useState(false);
  const [follow, setFollow] = useState(false);
  useEffect(() => {
    if (user) {
      user.user.followers.forEach((item) => {
        if (item._id === id) {
          console.log("user");
          setFollow(true);
        } else setFollow(false);
      });
    }
  }, [user, id, follow]);
  const followHandler = async (id) => {
    setFollow(!follow);
    dispatch(followAndUnfollowUser(id));
  };

  return (
    <div>
      <div className="accountright">
        {user && (
          <>
            <Avatar sx={{ bgColor: "orange" }}>N</Avatar>

            <Typography variant="h5">{user.user.name}</Typography>

            <div>
              <button onClick={() => setFollowersToggle(!followersToggle)}>
                <Typography>Followers</Typography>
              </button>
              <Typography>{user.user.followers.length}</Typography>
            </div>

            <div>
              <button onClick={() => setFollowingToggle(!followingToggle)}>
                <Typography>Following</Typography>
              </button>
              <Typography>{user.user.following.length}</Typography>
            </div>

            <div>
              <Typography>Posts</Typography>
              <Typography>{user.user.posts.length}</Typography>
            </div>

            <Button
              variant="contained"
              onClick={() => followHandler(user.user._id)}
            >
              {follow ? "UnFollow" : "Follow"}
            </Button>
          </>
        )}

        <Dialog
          open={followersToggle}
          onClose={() => setFollowersToggle(!followersToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Followers</Typography>

            {user && user.user.followers.length > 0 ? (
              user.user.followers.map((follower) => (
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
        </Dialog>

        <Dialog
          open={followingToggle}
          onClose={() => setFollowingToggle(!followingToggle)}
        >
          <div className="DialogBox">
            <Typography variant="h4">Following</Typography>

            {user && user.user.following.length > 0 ? (
              user.user.following.map((follow) => (
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
        </Dialog>
      </div>
    </div>
  );
};

export default PersonalProfile
