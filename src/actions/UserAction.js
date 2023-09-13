import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const URL = "http://localhost:4000/api/user/login"
// Login User

export const LoginUser = (email, password,navigate) => async (dispatch) => {
    try {
        dispatch({
            type: 'LoginRequest'
        });
        let { data } = await axios.post('http://localhost:4000/api/user/login', { email, password }, {
            headers: {
                "Content-Type": "Application/Json"
            }
        })
    
        if (data.token) {
            localStorage.setItem('auth-token', data.token);
            navigate("/home");
            dispatch({
                type: 'LoginSuccess',
                payload: data.user
            })
        }
        else {
            dispatch({
                type: 'LoginFailure',
                payload: 'Email or Password is not coorect!!'
            })
        }


    } catch (error) {
        console.log(error);
        dispatch({
            type: 'LoginFailure',
            payload: error
        })
    }
}

//Register User
// Login User
export const RegisterUser = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'RegisterRequest'
        });
        let { data } = await axios.post('http://localhost:4000/api/user/register', { name, email, password }, {
            headers: {
                "Content-Type": "Application/Json"
            }
        })
        if (data.token) {
            localStorage.setItem('auth-token', data.token);

            dispatch({
                type: 'RegisterSuccess',
                payload: data.user
            })
        }
        else {
            dispatch({
                type: 'RegisterFailure',
                payload: 'Email or Password is not coorect!!'
            })
        }


    } catch (error) {
        console.log(error);
        dispatch({
            type: 'RegisterFailure',
            payload: error
        })
    }
}

// Loading the User profile
export const LoadUser = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: 'LoadUserRequest'
        });
        let { data } = await axios.get('http://localhost:4000/api/user/profile', {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        })

        dispatch({
            type: 'LoadUserSuccess',
            payload: data.user
        })



    } catch (error) {
        console.log(error);
        dispatch({
            type: 'LoadUserFailure',
            payload: error
        })


    }

}


export const getFollowingPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: "postOfFollowingRequest",
        });

        let { data } = await axios.get(`http://localhost:4000/api/posts`, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        })
        console.log(data)

        dispatch({
            type: "postOfFollowingSuccess",
            payload: data.post,
        });

    } catch (error) {
        dispatch({
            type: "postOfFollowingFailure",
            payload: error.response.data.message,
        });
    }
};


//post of following
export const getAllUsers = () => async (dispatch) => {

    try {
        dispatch({
            type: 'getAllUserRequest',

        });

        let { data } = await axios.get('http://localhost:4000/api/users', {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        })

        dispatch({
            type: 'getAllUserSuccess',
            payload: data.users
        })


    } catch (error) {
        console.log(error);
        dispatch({
            type: 'getAllUserFailure',
            payload: error
        })

    }
}


export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'logoutUserRequest' });
        let { data } = await axios.get('http://localhost:4000/api/user/logout', {
            headers:
            {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        });

        dispatch({ type: 'logoutUserSuccess' })

    } catch (error) {
        dispatch({ type: "logoutUserFailure", payload: error })
    }
}



export const getUserByUserId = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'getUserByUserIdRequest' });
        const { data } = await axios.get(`http://localhost:4000/api/user/getUser/${id}`, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        });
        console.log(data);
        dispatch({ type: 'getUserByUserIdSuccess', payload: data })

    } catch (error) {

        dispatch({ type: 'getUserByUserIdFailure', payload: error })

    }

}


export const getUserPosts = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "userPostsRequest",
        });

        const { data } = await axios.get(`http://localhost:4000/api/user/${id}`, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        });
        console.log(data);
        dispatch({
            type: "userPostsSuccess",
            payload: data.posts,
        });
    } catch (error) {
        dispatch({
            type: "userPostsFailure",
            payload: error.response.data.message,
        });
    }
};


export const followAndUnfollowUser = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "followUserRequest",
        });

        const { data } = await axios.get(`http://localhost:4000/api/user/follow/${id}`, {

            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token"),
            },
        });
        console.log(data);
        dispatch({
            type: "followUserSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "followUserFailure",
            payload: error.response.data.message,
        });
    }
};


