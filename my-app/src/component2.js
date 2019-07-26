import React from "react";

class Com2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user_id: ""
    };
  }

  RegistData(e) {
    e.preventDefault();
    var body = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log('come back from server',data);
        if (data.message === "succes") {
          console.log(
            data.message,
            data.id.id,
            data.id.phonenumber,
            "iiiiiiiiiiiiii"
          );
          // this.props.setUserId(data.id);
          this.props.history.push("/ProfilesRoutes", { res: data.id });
        } else {
          this.props.history.push("/signup");
        }
      });
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

  render() {
    return (
      <body>
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">
                <div class="card-img-left d-none d-md-flex"></div>
                <div class="card-body">
                  <h5 class="card-title text-center">Sign In</h5>
                  <form class="form-signin">
                    <div class="form-label-group">
                      <input
                        type=""
                        id="inputEmail"
                        class="form-control"
                        placeholder="Email address"
                        required
                        onChange={this.handelChangeemail.bind(this)}
                        value={this.state.email}
                      />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required
                        onChange={this.handelChangepassword.bind(this)}
                        value={this.state.password}
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                      onClick={this.RegistData.bind(this)}
                    >
                      Sign In
                    </button>
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

export default Com2;
