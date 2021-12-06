import React from "react";
import { NavLink } from "react-router-dom";
const Menu =()=>{
    return(
    <>
    
    <div className="menu_style">
    <NavLink exact activeClassName="active_class" to="/" className="menu_style1">
    AboutUS
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/contact" className="menu_style2">
    ContactUs
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/search" className="menu_style3">
    Search
    </NavLink>
    <NavLink  activeClassName="active_class" to="/user/vinod/thapa" className="menu_style4">
    User
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/Service" className="menu_style5">
    Services
    </NavLink>

    </div>
   
    </>
    )
}
export default Menu;