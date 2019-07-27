import React from "react";
import { NavLink } from "react-router-dom";
// make links and sending data from rout to rout
class Nav3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      user_phone: ""
    };
    // const state1 = this.props
    // console.log(this.state.user_id, 'fsfsd')
  }

  getId() {
    this.setState(
      {
        user_id: this.props.history.location.state.res.id
      },
      () => console.log(this.props.history.location.state.res.id, "id")
    );
  }

  getphoneNumber() {
    this.setState(
      {
        user_phone: this.props.history.location.state.res.phonenumber
      },
      () =>
        console.log(this.props.history.location.state.res.phonenumber, "phone")
    );
  }

  componentDidMount() {
    // console.log(this.props.history.location.state.res)
    this.getId();
    this.getphoneNumber();
  }

  render() {
    return (
      <div class="container">
        <h1>Edit Profile</h1>

        <div class="row">
          <div class="col-md-3">
            <div class="text-center">
              <img
                src="//placehold.it/100"
                class="avatar img-circle"
                alt="avatar"
              />
              <h6>Upload a different photo...</h6>

              <input type="file" ctype="button" class="btn btn-secondary" />
            </div>
          </div>

          <div>
            <button type="button" class="btn btn-primary">
              <NavLink
                to={{
                  pathname: "/profile",
                  aboutProps: {
                    data: this.state.user_id
                  }
                }}
                className="nav-link"
                style={{ color: "white" }}
                exact
              >
                Add car
              </NavLink>{" "}
              <br></br>
            </button>

            <button class="btn btn-primary">
              <NavLink
                to={{
                  pathname: "/Update",
                  aboutProps: {
                    data: this.state.user_id
                  }
                }}
                className="nav-link"
                style={{ color: "white" }}
                exact
              >
                Update
              </NavLink>{" "}
              <br></br>
            </button>

            <button class="btn btn-primary">
              <NavLink
                to={{
                  pathname: "/Delete",
                  aboutProps: {
                    data: this.state.user_id
                  }
                }}
                className="nav-link"
                style={{ color: "white" }}
                exact
              >
                delete
              </NavLink>{" "}
              <br></br>
            </button>
          </div>
          <div class="col-md-9 personal-info">
            <h3>Personal info</h3>

            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-lg-3 control-label">First name:</label>
                <div class="col-lg-8">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Last name:</label>
                <div class="col-lg-8">
                  <input class="form-control" type="text" />
                </div>
              </div>

              <div class="form-group">
                <label class="col-lg-3 control-label">Email:</label>
                <div class="col-lg-8">
                  <input class="form-control" type="text" />
                </div>
              </div>

              <div class="form-group">
                <label class="col-md-3 control-label">phone number:</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Password:</label>
                <div class="col-md-8">
                  <input class="form-control" type="password" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Confirm password:</label>
                <div class="col-md-8">
                  <input class="form-control" type="password" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8">
                  <span></span>
                  <input
                    type="reset"
                    className="btn btn-g btn-primary btn-block"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav3;
