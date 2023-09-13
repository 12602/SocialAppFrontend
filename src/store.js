import { configureStore } from '@reduxjs/toolkit'
import { addPostReducer, commentReducer, getAllPostsReducer, likeReducer, myPostReducer, userPostsReducer } from './reducers/PostReducer';
import { getAllUserReducer, getUserByUserId, postOfFollowingReducer, UserReducer } from './reducers/UserReducer';


const store = configureStore({
    reducer: {
        user: UserReducer,
        getUserByUserId: getUserByUserId,

        postOfFollowing: postOfFollowingReducer,
        getAllUser: getAllUserReducer,
        like: likeReducer,
        comment: commentReducer,
        myPosts: myPostReducer,
        addPost: addPostReducer,
        userPost: userPostsReducer,
        getAllPosts:getAllPostsReducer

    }
})

export default store;