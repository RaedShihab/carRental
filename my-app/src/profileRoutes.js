// import React from 'react';
// import { BrowserRouter , Route } from 'react-router-dom';
// import Navgation from './navLink'
// import Profile from './profile'
// import Delete from './delete'
// import Update from './update'
// class ProfileRoutes extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//     }
//     }
   
    
//   render(){
//       return (
  
//         <div>
//          <div>
//            <BrowserRouter>
//            <Navgation/>
//            <Route path="/Profile" component={Profile} exact />
//            <Route path="/Delete" component={Delete} exact />
//            <Route path="/Update" component={Update} exact />
//            </BrowserRouter>
//             </div>
//         </div>
        
        
//       );
//       }
//     }
//     export default ProfileRoutes;

import React  from 'react';
 import {NavLink} from 'react-router-dom';



const Nav3 =() =>{

    return (

        <div >
         <button>
         <NavLink to="/profile" className='nav-link' exact>Profile</NavLink> <br></br>
         </button>

       <button>
       <NavLink to="/Update" className='nav-link' exact>Update</NavLink> <br></br>
        </button> 

        <button>
       <NavLink to="/Delete" className='nav-link' exact>Delete</NavLink> <br></br>
        </button> 

           {/* < button>
       <NavLink to="/com3" className='nav-link' exact>Add your car</NavLink> <br></br> 
           </button> */}
         
         
       </div>


    )
}

export default Nav3;