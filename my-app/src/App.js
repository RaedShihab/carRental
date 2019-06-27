import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
// import Com2 from './component2';
 import Com1 from './component1';
// import Com3 from './component3';
import Com4 from './component4';
import Profile from './profile'
 import Navgation from './navLink'
import App1 from './123component';
import Com2 from './component2';
import HomePage from './homePage';
import CarDetails from './carDetails';
import MapContainer from './MapContainer';
import Update from './update'
import Delete from './delete'
import profile from './profile'
import Nav3 from './profileRoutes'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  }
  }
 
render(){
    return (
      <BrowserRouter>
      <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark primary-color" style={{
          background: '#1da1f2'
        }}>

<a class="navbar-brand" href="#">Car Rental</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="basicExampleNav">

  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link"  href="/" >Home
        <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="/com4">Search by city and area</a>
    </li>
    {/* <li class="nav-item active">
      <a class="nav-link" href="/App1">For Car Rental companeis</a>
    </li> */}

    <li class="nav-item active">
      <a class="nav-link" href="/com1">Sign Up</a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="/com2">Sign In</a>
    </li>
    

  </ul>
</div>


</nav>
        </div>
      <div>
      <div>
      
        {/* <div>
        <NavLink to="/" class=" btn-primary" exact>Home Page </NavLink><br></br>
        <NavLink to="/com4" class=" btn-primary" exact>Search the car you need </NavLink><br></br>
        <NavLink to="/App1" class=" btn-primary" exact>For Companies </NavLink><br></br>
        </div> */}

       <div>  
           <Route path="/" component={HomePage} exact />
           <Route path="/com4" component={Com4} exact />
           <Route path="/App1" component={App1} exact />
           <Route path="/MapContainer" component={MapContainer} exact/>
           <Route path="/car-details" component={CarDetails} exact />
           <Route path='/com2' component={Com2} exact/>
          <Route path="/com1" component={Com1} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/Update" component={Update} exact />
          <Route path="/Delete" component={Delete} exact />
          <Route path="/ProfilesRoutes" component={Nav3}/>
          </div>

      </div>
      
      </div>
      </div>
      </BrowserRouter>
      
    );
    }
  }
  
export default App;

