import React  from 'react';
import {NavLink} from 'react-router-dom';



const Navgation =() =>{

    return (

        <div >
         <NavLink to="/com4" className='nav-link' exact>Search the car you need </NavLink>
         <NavLink to="/App1" className='nav-link' exact>For Companies </NavLink>
       </div>


    )
}

export default Navgation;
