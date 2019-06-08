import React  from 'react';
import {NavLink} from 'react-router-dom';


const Navgation =() =>{

    return(
        <div >
         <NavLink to="/com2" className='nav-link'>Login</NavLink> <br></br>
         <NavLink to="/com1" className='nav-link'>Register</NavLink>
       </div>


    )
}

export default Navgation;
