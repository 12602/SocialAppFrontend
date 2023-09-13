import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {Home,HomeOutlined,Add,AddOutlined,SearchOutlined,Search,AccountCircle,AccountCircleOutlined} from '@mui/icons-material'
import { fontSize } from '@mui/system'

 const Header = () => {
  const [tab,setTab]=useState(window.location.pathname)
  const token=localStorage.getItem("auth-token");
  let  isToken=false
  if(token){
    isToken=true;

  }

  return (

    <>

   


      <div className="header">
  
        <Link to='/home' onClick={()=>setTab("/home")}>
   
   {
     token && tab==='/home'?<Home style={{color:'black'}}/>:<HomeOutlined/>
   }
   

   </Link >
   <Link to='/addPost' onClick={()=>setTab("/addPost")}>
   
   {
    tab==='/addPost'?<Add style={{color:'black'}}/>:<AddOutlined/>
   }
   
   

   </Link>
   {/* <Link to='/search' onClick={()=>setTab("/search")}>
   
 
   {
    tab==='/search'?<Search style={{color:'black'}}/>:<SearchOutlined/>
   }
   
   </Link> */}
   <Link to='/account' onClick={()=>setTab("/account")}>
  
   {
    tab==='/account'?<AccountCircle style={{color:'black'}}/>:<AccountCircleOutlined/>
   }
   

   </Link>
      
 
   
        
</div>
    </>
  )
}

export default Header