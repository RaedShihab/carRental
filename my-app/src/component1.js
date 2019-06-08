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
        
        <div>
            <input type='text' value={this.state.firstname}  placeholder="First Name"
            onChange={this.handelChangefirstname.bind(this)}
            />
            <input type='text' value={this.state.lastname}  placeholder="Last Name"
            onChange={this.handelChangelastname.bind(this)}
            />
            <input type='text' value={this.state.password}  placeholder="Password"
            onChange={this.handelChangepassword.bind(this)}
            />
            <input type='text' value={this.state.email}  placeholder="Email"
            onChange={this.handelChangeemail.bind(this)}
            />
            <input type='text' value={this.state.phonenumber}  placeholder="Phone Number"
            onChange={this.handelChangephone.bind(this)}
            />
           
           <button type='submit' onClick={this.sendToServer.bind(this)} >submit</button>
          </div>
      );
      }
    }

    export default Com1;