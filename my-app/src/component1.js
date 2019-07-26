import React from "react";
import "./App.css";

class Com1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      phonenumber: ""
    };
  }
  //handel chenge:
  handelChangefirstname(e) {
    this.setState({
      firstname: e.target.value
    });
    console.log(this.state.firstname);
  }
  handelChangelastname(e) {
    this.setState({
      lastname: e.target.value
    });
    console.log(this.state.lastname);
  }
  handelChangepassword(e) {
    this.setState({
      password: e.target.value
    });
    console.log(this.state.password);
  }
  handelChangeemail(e) {
    this.setState({
      email: e.target.value
    });
    console.log(this.state.email);
  }
  handelChangephone(e) {
    this.setState({
      phonenumber: e.target.value
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
    };
    fetch("http://localhost:3001/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(response => {})
      .then(data => {
        this.props.history.push("/signin");
        console.log("come back from server", data);
        // this.setState({
        //   any: data,
        //   dispalyMealList: true
        // })
      });
  }

  render() {
    return (
      <body>
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex"></div>
                <div class="card-body">
                  <h5 class="card-title text-center">Register</h5>
                  <form class="form-signin">
                    <div class="form-label-group">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handelChangefirstname.bind(this)}
                      />
                      <label for="inputUserame">First Name</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handelChangelastname.bind(this)}
                      />
                      <label for="inputEmail">Last Name</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        className="form-control"
                        type="password"
                        value={this.state.password}
                        onChange={this.handelChangepassword.bind(this)}
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        className="form-control"
                        type="email"
                        value={this.state.email}
                        onChange={this.handelChangeemail.bind(this)}
                      />
                      <label for="inputEmail">Email</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        className="form-control"
                        type="number"
                        value={this.state.phonenumber}
                        onChange={this.handelChangephone.bind(this)}
                      />
                      <label for="inputConfirmPassword">Phone Number</label>
                    </div>

                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.sendToServer.bind(this)}
                    >
                      Register
                    </button>

                    <button
                      class="btn btn-lg btn-google btn-block text-uppercase"
                      type="submit"
                    >
                      <i class="fab fa-google mr-2"></i> Sign up with Google
                    </button>
                    <a class="d-block text-center mt-2 small" href="/com2">
                      Sign In
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Com1;
