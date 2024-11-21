import React from "react";
import '../styling.css';
import _button from "./button"; 

function sidebar() {

  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <h2>
          Joshua's Portfolio
        </h2>
      </div>
      <nav className="side-buttons">
        <_button label='Home' href='#home'></_button>
        <_button label='Projects' href='#projects'></_button>
        <_button label='Resume/Cv' href='../../public/SW-jarrevillaga-Oct2024.pdf'></_button>
      </nav>
    </div>
  )
}

export default sidebar; 