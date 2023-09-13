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
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from './actions/UserAction';


function App() {

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(LoadUser())
  }, [])
    
  return (

    <div className='app'>
      <Router>
        {isAuthenticated && <Header />}

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
      <ToastContainer />

    </div>
  );

}

export default App;
