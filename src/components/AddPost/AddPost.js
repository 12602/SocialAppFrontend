import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './AddPost.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {

  const navigate=useNavigate()
    const notify = (msg) => toast(msg);
    const [image, setImage] = useState('')
    const [caption,setCaption]=useState('')
    const [url,setUrl]=useState(false);
    const [loading,setLoading]=useState(false);
  
  useEffect(() => {
    if (url) {

     const resp= fetch("http://localhost:4000/api/post/upload", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token")
        },
        body: JSON.stringify({
          caption,
        url: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            notify(data.error)
          } else {
            notify("Successfully Posted")
            navigate("/account")
          }
        })
        .catch(err => console.log(err))
    
      }
   
      
  
  }, [url])
  
    
    //posting image to cloudinary
    const token=localStorage.getItem('auth-token');
  
  const postSaveToCloud = async(e) => {
     e.preventDefault()
  console.log("clicked cloud")

    if(!image || !caption){
      setLoading(false);
    
       return  notify("Please select image and write caption !!!!!!");
    
      }
  
     
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

    //saving post to mongodb
  
  
    

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
