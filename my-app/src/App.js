import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./search";
import Profile from "./profile";
import App1 from "./routes";
import Signin from "./signin";
import HomePage from "./homePage";
import CarDetails from "./carDetails";
import MapContainer from "./MapContainer";
import Update from "./update";
import Delete from "./delete";
import Nav3 from "./profileRoutes";
import Signup from "./signup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <nav
              class="navbar navbar-expand-lg navbar-dark primary-color"
              style={{
                background: "#1da1f2"
              }}
            >
              <a class="navbar-brand" href="#">
                Car Rental
              </a>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav"
                aria-controls="basicExampleNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="basicExampleNav">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/search">
                      Search by city and area
                    </a>
                  </li>
                  {/* <li class="nav-item active">
      <a class="nav-link" href="/App1">For Car Rental companeis</a>
    </li> */}

                  <li class="nav-item active">
                    <a class="nav-link" href="/signup">
                      Sign Up
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/signin">
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div>
            <div>
              <div>
                <Route path="/" component={HomePage} exact />
                <Route path="/search" component={Search} exact />
                <Route path="/App1" component={App1} exact />
                <Route path="/MapContainer" component={MapContainer} exact />
                <Route path="/car-details" component={CarDetails} exact />
                <Route path="/signin" component={Signin} exact />
                <Route path="/signup" component={Signup} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/Update" component={Update} exact />
                <Route path="/Delete" component={Delete} exact />
                <Route path="/ProfilesRoutes" component={Nav3} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
