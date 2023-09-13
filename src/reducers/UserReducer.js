import { createReducer } from "@reduxjs/toolkit";

const initialState = {

    isAuthenticated: false,


}

//login  and register reducer
export const UserReducer = createReducer(initialState, {
    LoginRequest: (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;

    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload
    },
    LoginFailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    RegisterRequest: (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    LoadUserRequest: (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

})


//get post of the following reducer
export const postOfFollowingReducer = createReducer(initialState, {
    postOfFollowingRequest: (state) => {
        state.loading = true;
    },
    postOfFollowingSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    postOfFollowingFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    },
});



//get all the users 
export const getAllUserReducer = createReducer(initialState, {
    getAllUserRequest: (state) => {
        state.loading = true
    },
    getAllUserSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload
    },
    getAllUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    logoutUserRequest: (state) => {
        state.loading = true;

    },
    logoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false


    },
    logoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true


    }


});










//get user profile by userid
export const getUserByUserId = createReducer(initialState, {
    getUserByUserIdRequest: (state) => { state.loading = true },
    getUserByUserIdSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload
    },
    getUserByUserIdFailure: (state, action) => {
        state.loading = false;
        state.erorr = action.payload
    }
})




