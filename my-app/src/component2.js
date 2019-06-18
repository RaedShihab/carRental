import React from 'react';
import { Redirect } from 'react-router-dom'
import Profile from './profile';

class Com2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user_id: ''
    }
  }

  RegistData(e) {
    e.preventDefault();
    var body = {
      email: this.state.email,
      password: this.state.password
    }
    fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json();

    }).then((data) => {
      //console.log('come back from server',data);
      if(data.message === 'succes') {
        //  console.log(data.message, data.id)
        // this.props.setUserId(data.id);
          this.props.history.push('/ProfilesRoutes', {res:data.id});
        
      }
      else {
          this.props.history.push('/com1');
      }
      
    });
  }

  handelChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
    console.log(this.state.password);
  }
  handelChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state.email);
  }

    render(){
      return (
        <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
          <h1 className="h3 mb-3font-weight-normal">Please Sign In</h1>
          
            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.email}  placeholder="Email"
            onChange={this.handelChangeemail.bind(this)} />
            </div>
          
        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.password}  placeholder="Password"
            onChange={this.handelChangepassword.bind(this)} />
       
        </div>
           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.RegistData.bind(this)} >Sign In</button>

          </div>
         </div>
         </div>
         </div>
      );
      }
    }

    export default Com2;