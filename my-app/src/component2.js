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
           <input type='text' value={this.state.email}  placeholder="Email"
            onChange={this.handelChangeemail.bind(this)} />

           <input type='text' value={this.state.password}  placeholder="Password"
            onChange={this.handelChangepassword.bind(this)} />
          </div>
      );
      }
    }

    export default Com2;