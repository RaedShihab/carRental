import React  from 'react';
import {NavLink} from 'react-router-dom';



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

        <div class="container">
    <h1>Edit Profile</h1>
  
	<div class="row">
      
      <div class="col-md-3">
        <div class="text-center">
          <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"/>
          <h6>Upload a different photo...</h6>
          
          <input type="file" ctype="button" class="btn btn-secondary"/>
        </div>
      </div>
      
      <div>
      <button type="button"  class="btn btn-primary" >
          <NavLink to={{
             pathname: '/profile',
             aboutProps: {
                 data:this.state.user_id
             }
         }} 
         className='nav-link' exact>Add</NavLink> <br></br>
         </button>

         <button class="btn btn-primary">
         <NavLink to={{ 
             pathname: '/Update',
             aboutProps: {
                 data:this.state.user_id
             }
         }} 
         className='nav-link' exact>Update</NavLink> <br></br>
         </button> 

         <button class="btn btn-primary">
         <NavLink to={{ 
             pathname: '/Delete',
             aboutProps: {
                 data:this.state.user_id
             }
         }} 
         className='nav-link' exact>delete</NavLink> <br></br>
         </button>
      </div>
        <div class="col-md-9 personal-info">
        <h3>Personal info</h3>
        
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="Jane"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="Bishop"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Company:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="janesemail@gmail.com"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Time Zone:</label>
            <div class="col-lg-8">
              <div class="ui-select">
                <select id="user_time_zone" class="form-control">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Username:</label>
            <div class="col-md-8">
              <input class="form-control" type="text" value="janeuser"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Confirm password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-primary" value="Save Changes"/>
              <span></span>
              <input type="reset" class="btn btn-default" value="Cancel"/>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>


    //     <div >
    //      <button>
    //      <NavLink to={{
    //          pathname: '/profile',
    //          aboutProps: {
    //              data:this.state.user_id
    //          }
    //      }} 
    //      className='nav-link' exact>Profile</NavLink> <br></br>
    //      </button>

    //      <button>
    //      <NavLink to={{ 
    //          pathname: '/Update',
    //          aboutProps: {
    //              data:this.state.user_id
    //          }
    //      }} 
    //      className='nav-link' exact>Update</NavLink> <br></br>
    //      </button> 

    //      <button>
    //      <NavLink to={{ 
    //          pathname: '/Delete',
    //          aboutProps: {
    //              data:this.state.user_id
    //          }
    //      }} 
    //      className='nav-link' exact>delete</NavLink> <br></br>
    //      </button>
    //    </div>
    )
}
        }
export default Nav3;