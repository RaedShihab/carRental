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
 import {NavLink, Link} from 'react-router-dom';



 class Nav3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          user_id: ''  
        };
        // const state1 = this.props
        // console.log(this.state.user_id, 'fsfsd')
      }

    getId() {
     this.setState({
      user_id: this.props.history.location.state.res
       } ,()=> console.log(this.props.history.location.state.res, 'fsfdfsdsd'))
    }

    componentDidMount() {
        // console.log(this.props.history.location.state.res)
        this.getId();
      }
    
    render() {
    return (
        <div >
         <button>
         <NavLink to={{
             pathname: '/profile',
             aboutProps: {
                 data:this.state.user_id
             }
         }} 
         className='nav-link' exact>Profile</NavLink> <br></br>
         </button>

         <button>
         <NavLink to={{ 
             pathname: '/Update',
             aboutProps: {
                 data:this.state.user_id
             }
         }} 
         className='nav-link' exact>Update</NavLink> <br></br>
         </button> 

         <button>
         <NavLink to={{ 
             pathname: '/Delete',
             aboutProps: {
                 data:this.state.user_id
             }
         }} 
         className='nav-link' exact>delete</NavLink> <br></br>
         </button>
       </div>
    )
}
        }
export default Nav3;