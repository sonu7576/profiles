import React from "react";
import "./Sidebar.css";
import { ArrowUpCircle, Eye, Home, MessageCircle, Settings } from "react-feather";

function Sidebarleft() {
  return (
    

<>
<div className="sidebar">
  <div className="profile">
    <div><img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Avatar" className="avatar w-100 h-100" /></div>
    <h4>Mohammad Anas <i style={{color:"#0c6dbc"}} class="fa-solid fa-chevron-right fa-xs"></i></h4>
    <p>mn001xdr</p>
    <div className="fw-lighter"><Eye/>view profile</div>
  </div>
  <ul className="menu">
    <li className="active">
      <a href="/">
        <i class="fa-solid fa-bars"></i>
        <span><Home className="pe-1"/>Home</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-person-snowboarding"></i>
        <span><MessageCircle className="pe-1" />Messages</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-puzzle-piece"></i>
        <span><  Settings className="pe-1"/>Settngs</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-circle-question"></i>
        <span>< ArrowUpCircle className="pe-1"/>Upgrde</span>
      </a>
    </li>
    <li>
      <a href="">
        <i class="fa-solid fa-headset"></i>
        <span><Eye className="pe-1"/>Explore</span>
      </a>
    </li>
  </ul>
  
</div>
</>
  );
}

export default Sidebarleft;