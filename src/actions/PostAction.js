import axios from "axios"


export const likePost = (id) => async (dispatch) => {

    try {

        dispatch({ type: 'likeRequest' })

        const { data } = await axios.get(`http://localhost:4000/api/posts/${id}`, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")

            }
        })
        console.log(data)

        dispatch({ type: 'LikeSuccess', payload: data.message })

    } catch (error) {
        dispatch({ type: 'LikeFailure', payload: error })
    }
}


export const addCommentOnPost = (id, comment) => async (dispatch) => {

    try {

        dispatch({ type: 'commentRequest' })

        const { data } = await axios.put(`http://localhost:4000/api/posts/comment/${id}`, { comment },
            {
                headers: {
                    "Content-Type": "Application/Json",
                    "auth-token": localStorage.getItem("auth-token")

                }
            })
        console.log(data)

        dispatch({ type: 'commentSuccess', payload: data.message })

    } catch (error) {
        dispatch({ type: 'commentFailure', payload: error })
    }
}
export const getMyPosts = () => async (dispatch) => {

    try {

        dispatch({ type: 'myPostsRequest' })

        const { data } = await axios.get(`http://localhost:4000/api/myposts`, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        })
        dispatch({ type: 'myPostsSuccess', payload: data.posts })

    } catch (error) {
        dispatch({ type: 'myPostsFailure', payload: error })
    }
}

export const createPost = (caption, image) => async (dispatch) => {
    try {
        dispatch({ type: 'addPostRequest' });
        console.log(image);

        const { data } = await axios.post(`http://localhost:4000/api/post/upload`, { caption, url: image }, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        })

        dispatch({ type: 'postAddSuccess', payload: data.posts })


    } catch (error) {
        dispatch({ type: 'postAddFailure', payload: error })
    }
}


export const deletePost = (id, comment) => async (dispatch) => {

    try {

        dispatch({ type: 'commentRequest' })

        const { data } = await axios.post(`http://localhost:4000/api/posts/${id}`, { comment })

        dispatch({ type: 'commentSuccess', payload: data.message })

    } catch (error) {
        dispatch({ type: 'commentFailure', payload: error })
    }
}









export const deleteCommentOnPost = (id, comment) => async (dispatch) => {
    try {

        dispatch({ type: 'deleteCommentRequest' })

        const { data } = await axios.delete(`http://localhost:4000/api/posts/${id}`, { comment })

        dispatch({ type: 'deleteCommentSuccess', payload: data.message })

    } catch (error) {
        dispatch({ type: 'deleteCommentFailure', payload: error })
    }

}








//get all the posts
export const getAllPost = () => async (dispatch) => {

    try {

        dispatch({ type: 'allPostsRequest' })

        const { data } = await axios.get(`http://localhost:4000/api/getallposts`, {
            headers: {
                "Content-Type": "Application/Json",
                "auth-token": localStorage.getItem("auth-token")
            }
        });
        console.log(data);
        dispatch({ type: 'allPostSuccess', payload: data })

    } catch (error) {
        dispatch({ type: 'allPostFailure', payload: error })
    }
}