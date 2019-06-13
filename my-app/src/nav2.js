 import React  from 'react';
 import {NavLink} from 'react-router-dom';



const Nav2 =() =>{

    return (

        <div >
         <button>
         <NavLink to="/com1" className='nav-link' exact>sign up</NavLink> <br></br>
         </button>

       <button>
       <NavLink to="/com2" className='nav-link' exact>Login</NavLink> <br></br>
        </button> 

           < button>
       <NavLink to="/com3" className='nav-link' exact>Add your car</NavLink> <br></br> 
           </button>
         
         
       </div>


    )
}

export default Nav2;