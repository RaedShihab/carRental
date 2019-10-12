import React from "react";
import "./App.css";
//making signup component
class Signup extends React.Component {
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
  //making handel chenges for all input texts:
  handelChange = e => {
    let value = e.target.name;
    this.setState({
      [value]: e.target.value
    });
  };
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
                        name="firstname"
                        className="form-control"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handelChange}
                      />
                      <label for="inputUserame">First Name</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        name="lastname"
                        className="form-control"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handelChange}
                      />
                      <label for="inputEmail">Last Name</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        name="password"
                        className="form-control"
                        type="password"
                        value={this.state.password}
                        onChange={this.handelChange}
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        name="email"
                        className="form-control"
                        type="email"
                        value={this.state.email}
                        onChange={this.handelChange}
                      />
                      <label for="inputEmail">Email</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        name="phonenumber"
                        className="form-control"
                        type="number"
                        value={this.state.phonenumber}
                        onChange={this.handelChange}
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

export default Signup;
