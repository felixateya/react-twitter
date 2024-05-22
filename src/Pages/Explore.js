import React from 'react'
import Sidebar from '../Components/Sidebar'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router'
function Explore() {
  const auth = getAuth()
  const navigate = useNavigate()
  onAuthStateChanged(auth, (user) => {
  if (!user) {
    navigate("/")
  }
});
  return (
    <div className='Tweets'>
    <Sidebar/>
    <div className="tweet">
        <div className="home">
        <h1>Trends for you</h1>
        </div>
    </div>
    <div className="tweet2">
        <div className="home2">
        <h1>Who to follow</h1>
        </div>
    </div>
    
    </div>
  )
}

export default Explore