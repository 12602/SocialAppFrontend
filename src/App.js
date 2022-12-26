import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Login from './components/Login/Login';

import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home/Home';
import Account from './components/Account/Account';
import AddPost from './components/AddPost/AddPost';
import Register from './components/Register/Register';
import Profile from './components/UserProfiles/Profile';
import './App.css'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import {zeroRightClassName,fullWidthClassName, noScrollbarsClassName} from 'react-remove-scroll-bar';

function App() {
 
    
    
  return (

    <div className='app'>

    





        <Router>
      <Header/>
      <Routes>
          
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/addPost" element={<AddPost/>}/>
        <Route exact path='/user/:id' element={<Profile/>}/>
        <Route exact path='/account' element={<Account/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<Home/>}/>
       </Routes>
     </Router>
     <ToastContainer/>
      {/* <Router>
        <Header/>
       <Routes> */}
       {/* <Route exact  path="/" element={<Home/>}/>
       </Routes>
       <Routes>
     <Route path="/login" element={<Login/>}/>
     </Routes>
  <Route path="/register" element={<Register/>}/>

  <Route  path="/home" element={<Home/>}/>
  <Route path="/account" element={<Account/>}/>
  <Route path="/addPost" element={<AddPost/>}/>
  <Route path="/user/:id" element={<Profile/>}/>

<ToastContainer /> */}


  

  </div>
  );

}

export default App;
