
import React from "react";
import {useParams, useLocation, useHistory, NavLink} from "react-router-dom";

const User =()=>{
    const {fname, lname}=useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(History);

    return(
    <>
    <h1> user {fname} {lname} page </h1>
    <p> My current location is {location.pathname}</p>
    {location.pathname===`/user/vinod/thapa`? (<button onClick={()=>history.goBack()}> Go Back</button>):null}
    <p/>
    {location.pathname===`/user/vinod/thapa`? (<button onClick={()=>history.push('/')}> push</button>):null}
    {/* <button> click me</button> */}
    <p/>
    <p/>
    
    <NavLink to='/'> <button>Go Home</button></NavLink>
    </>
    )
}
export default User;