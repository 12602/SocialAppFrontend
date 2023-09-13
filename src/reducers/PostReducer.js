import { createReducer } from "@reduxjs/toolkit";

const initialState = {};
export const likeReducer = createReducer(initialState, {
    likeRequest: (state) => {
        state.loading = true
    },
    likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    likeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    followUserRequest: (state) => {
        state.loading = true;
    },
    followUserSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    followUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    },
    clearMessage: (state) => {
        state.message = null
    }


})

export const commentReducer = createReducer(initialState, {
    commentRequest: (state) => {
        state.loading = true
    },
    commentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    commentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    },
    clearMessage: (state) => {
        state.message = null
    }


})
export const deleteCommentOnPostReducer = createReducer(initialState, {
    deleteCommentRequest: (state) => {
        state.loading = true
    },
    deleteCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    deleteCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    },
    clearMessage: (state) => {
        state.message = null
    }


})


export const deletePostReducer = createReducer(initialState, {
    deletePostRequest: (state) => {
        state.loading = true
    },
    deletePostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    deletePostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    },
    clearMessage: (state) => {
        state.message = null
    }


})


export const myPostReducer = createReducer(initialState, {
    myPostsRequest: (state) => { state.loading = true },
    myPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload
    },
    myPostsFailure: (state, action) => {
        state.loading = false;
        state.erorr = action.payload
    }
})


export const addPostReducer = createReducer(initialState, {
    addPostRequest: (state) => { state.loading = true },
    addPostSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload
    },
    addPostFailure: (state, action) => {
        state.loading = false;
        state.erorr = action.payload
    }
})



export const userPostsReducer = createReducer(initialState, {
    userPostsRequest: (state) => {
        state.loading = true;
    },
    userPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    userPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    },
});







export const postOfFollowingReducer = createReducer(initialState, {
    postOfFollowingRequest: (state) => {
        state.loading = true
    },
    postOfFollowingSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload
    },
    postOfFollowingFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    clearError: (state) => {
        state.error = null
    }

});





export const getAllPostsReducer = createReducer(initialState, {
    allPostsRequest: (state) => {
        state.loading = true;
    },
    allPostSuccess: (state, action) => {
        state.loading = false;
        state.getAllPosts = action.payload;
    },
    allPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    },
});