import React  from 'react';
import {NavLink} from 'react-router-dom';



const Navgation =() =>{

    return (

        <div >
      <button>
      <NavLink to="/com4" className='nav-link' exact>Search the car you need </NavLink>
     </button>
         
       <button>
       <NavLink to="/App1" className='nav-link' exact>For Companies </NavLink>
           </button>  
       </div>


    )
}

export default Navgation;
