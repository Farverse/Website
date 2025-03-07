import React from 'react'
import { ImHome} from "react-icons/im";
import { BiHistory } from "react-icons/bi";
import { RiFeedbackLine } from "react-icons/ri";
import'../Styles/sidebar.css';
const Sidebar = () => {
  return (
    <div className="menu">
        <img src='Image1.svg' alt='logo'/><h2>CCODEL SUPPORT TICKET.</h2>

        <div className="menu--list">
          <a href="#" className="item">
          <ImHome /> Dashboard
          </a>
           
        </div>

        <div className="menu--list">
          <a href="#" className="item">
          <BiHistory /> History
          </a>

        </div>
      
        <div className="menu--list">
          <a href="#" className="item">
          <RiFeedbackLine /> Complaints
          </a>

        </div>
    </div>
  )
}

export default Sidebar
