import React from 'react';


class Com1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      phonenumber: ''
    }
  }
//handel chenge:
  handelChangefirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
    console.log(this.state.firstname);
  }
  handelChangelastname(e) {
    this.setState({
      lastname: e.target.value,
    });
    console.log(this.state.lastname);
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
  handelChangephone(e) {
    this.setState({
      phonenumber: e.target.value,
    });
    console.log(this.state.phonenumber);
  }
////////////////////////////////
  sendToServer(e) {
    e.preventDefault();
    var body = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
      email: this.state.email,
      phonenumber: this.state.phonenumber
    }
    fetch('http://localhost:3001/user/add', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      
    }).then((data) => {
      console.log('come back from server',data);
      // this.setState({
      //   any: data,
      //   dispalyMealList: true
      // })
    });
  }

    render(){
      return (
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
              <h1 className='h3 mb-3font-weight-normal'>Please Signup</h1>
              <div className='form-group'>
                <label htmlFor='first_name'>First Name</label>
              <input className='form-control'
             type='text' value={this.state.firstname}  placeholder="First Name"
            onChange={this.handelChangefirstname.bind(this)}
            />
              </div>
            <div className='form-group'>
            <label htmlFor='last_name'>Last Name</label>
            <input className='form-control'
             type='text' value={this.state.lastname}  placeholder="Last Name"
            onChange={this.handelChangelastname.bind(this)}
            />
            </div>
            <div  className='form-group'>
            <label htmlFor='password'>Passwords</label>
            <input className='form-control'
             type='password' value={this.state.password}  placeholder="Password"
            onChange={this.handelChangepassword.bind(this)}
            />
            </div>
            <div className='form-group'>
            <label htmlFor='first_name'>Email Adress</label>
            <input className='form-control'
             type='email' value={this.state.email}  placeholder="Email"
            onChange={this.handelChangeemail.bind(this)}
            />
            </div>
            <div className='form-group'>
            <label htmlFor='phone_number'>Phone Number</label>
            <input className='form-control'
             type='number' value={this.state.phonenumber}  placeholder="Phone Number"
            onChange={this.handelChangephone.bind(this)}
            />
            </div> 
            
           
           <button className='btn btn-g btn-primary btn-block'
            type='submit' onClick={this.sendToServer.bind(this)} >Signup</button>

          </div>
          </div>
          </div>
          
      );
      }
    }

    export default Com1;