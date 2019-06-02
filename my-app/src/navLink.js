import React  from 'react';
import {NavLink} from 'react-router-dom';


const Navgation =() =>{

    return(
        <div className="NaV">
         <NavLink to="/com2">component 2</NavLink> <br></br>
         <NavLink to="/com1">component 1</NavLink>
       </div>


    )


}

export default Navgation;
