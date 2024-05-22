import React from "react";
// import image from "./Images/img.png"
import "./App.css";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweets from "./Pages/Tweets";
import Explore from "./Pages/Explore";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/Registration'element={<Registration/>}/>
      <Route path='/Tweets'element={<Tweets/>}/>
      <Route path='/Explore'element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
