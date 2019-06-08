import React from 'react';


class Com2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
      
    }).then((data) => {
      console.log('come back from server',data);
      // this.setState({
      //   any: data,
      //   dispalyMealList: true
      // })
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
        
        <div className='container'>
          <div className='col-md-6'>
          <h1 className="h3 mb-3font-weight-normal">Please Sign In</h1>
          <div className='form-group'>
          <input className='form-control'
            type='text' value={this.state.email}  placeholder="Email"
            onChange={this.handelChangeemail.bind(this)} />
          </div>
          </div>
          
          <div className='col-md-6'>
        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.password}  placeholder="Password"
            onChange={this.handelChangepassword.bind(this)} />
        </div>
        </div>
           

           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.RegistData.bind(this)} >Sign In</button>

          </div>
      );
      }
    }

    export default Com2;