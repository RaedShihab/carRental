 import React  from 'react';
 import {NavLink} from 'react-router-dom';



const Nav2 =() =>{

    return (

        <div >
         <button type="button">
         <NavLink to="/com1" exact>sign up</NavLink> <br></br>
         </button>

       <button type="button" >
       <NavLink to="/com2" exact>Login</NavLink> <br></br>
        </button> 
       </div>


    )
}

export default Nav2;