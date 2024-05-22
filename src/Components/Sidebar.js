import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaHome, FaTwitter, FaSearch, FaBell,FaUser, FaEllipsisH, FaEnvelope} from "react-icons/fa"
import { getAuth, signOut } from "firebase/auth";
function Sidebar() {
const navigate = useNavigate()
    function signout(){

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
});
    }
  return (
    <div className='Sidebar'>
    <Link to="/Tweets"><FaTwitter className='twt'/></Link>
    <Link to="/Tweets"><FaHome className='icons'/> Home</Link>
    <Link to="/Explore"><FaSearch className='icons'/> Explore</Link>
    <Link><FaBell className='icons'/> Notifications</Link>
    <Link><FaEnvelope className='icons'/> Messages</Link>
    <Link><FaUser className='icons'/> Profile</Link>
    <Link><FaEllipsisH className='icons'/> More</Link>
    <button id="Tweet">Tweet</button>
<p id="signOut" onClick={signout}>Sign out</p>
    </div>
  )
}

export default Sidebar