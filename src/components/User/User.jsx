import { Avatar, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const User = ({userId,name,avatar}) => {
  return (
    <Link to={`/user/${userId}`} className='homeUser'>
       
       {/* <Avatar sx={{ bgColor:'orange'}}>N</Avatar> */}
     <img src="https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
       <Typography variant="h5"style={{color:"red"}}>{name}</Typography>
    </Link>
  )
}

export default User
