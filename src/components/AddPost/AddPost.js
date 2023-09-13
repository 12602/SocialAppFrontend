import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './AddPost.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/PostAction';
const AddPost = () => {

  const navigate=useNavigate()
    const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
    const [image, setImage] = useState('')
    const [caption,setCaption]=useState('')
    const [url,setUrl]=useState(false);
    const [loading,setLoading]=useState(false);
  
  useEffect(() => {
    if (url) {

      console.log("posting...")
      dispatch(createPost(caption, url))
      console.log("post added")
      navigate("/account");

    }
  }, [url, dispatch])



  const postSaveToCloud = async(e) => {
    e.preventDefault()

    if(!image || !caption){
      setLoading(false);
    
       return  notify("Please select image and write caption !!!!!!");
    
      }
    console.log("posting...")


  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "insta-clone")
  data.append("cloud_name", "dcdr59rmx")
  const c=await fetch("https://api.cloudinary.com/v1_1/dcdr59rmx/image/upload", {
    method: "post",
    body: data
  }).then(res => res.json())
    .then(data =>setUrl(data.url))
    .catch(err => console.log(err))
    console.log("posting...")
    //saving post to mongodb
    notify("New Post Added Succesfully !!!!");
  } 



  
    const loadfile = (event) => {
        var output = document.getElementById("output");
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
      };
    
  return (
    <div className='newPost'>
        <form className="newPostForm" onSubmit={postSaveToCloud}>
        <Typography variant="h3">New Post</Typography>
        
      
            <img id="output"/>
            <input type="file" accept="image/*" onChange={(e)=>{
                loadfile(e);
                setImage(e.target.files[0])
                }}  />
            
      
        
        <input
          type="text"
          placeholder="Caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <Button disabled={loading} variant="contained" type="submit">
          Post
        </Button>

        </form>
     
           
        </div>
      
    
  )
}

export default AddPost
