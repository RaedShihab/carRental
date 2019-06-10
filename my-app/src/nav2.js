 import React  from 'react';
 import {NavLink} from 'react-router-dom';



const Nav2 =() =>{

    return (

        <div >
         <NavLink to="/com2" className='nav-link' exact>Login</NavLink> <br></br>
         <NavLink to="/com1" className='nav-link' exact>Register</NavLink> <br></br>
         <NavLink to="/com3" className='nav-link' exact>Add your car</NavLink> <br></br>
       </div>


    )
}

export default Nav2;