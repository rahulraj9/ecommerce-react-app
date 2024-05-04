import React from "react";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import './NavBar.css'


export default function NavBar(){
  return(<>
     <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/" className="nav-link">eCommerce</a></li>
        <li className="nav-item"><a href="/products" className="nav-link">Products</a></li>
        <li className="nav-item"><a href="/newProducts" className="nav-link">Add d a Product
        <AddIcon/>
        </a></li>
       
        <li className="nav-item nav-item-right"> {/* Updated class for the right side */}
          <a href="/account" className="nav-link">
            My Account 
            <Avatar alt="Account" src="/static/images/avatar/1.jpg" />
          </a>
        </li>
      </ul>
    </nav>
  </>)
}