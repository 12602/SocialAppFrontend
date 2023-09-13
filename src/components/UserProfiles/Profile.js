import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { followAndUnfollowUser, getUserByUserId, getUserPosts } from '../../actions/UserAction';
import Posts from '../Posts/Posts';
import PersonalProfile from './PersonalProfile';
const Profile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.getUserByUserId);
  const { posts } = useSelector(state => state.userPost);

  useEffect(() => {
    dispatch(getUserByUserId(id));
    dispatch(getUserPosts(id));

  }, [id, dispatch]);


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
        <PersonalProfile user={user} />
      
     </div>
      
    </div>
  )
}

export default Profile
