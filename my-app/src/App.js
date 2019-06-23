import React from 'react';
import { BrowserRouter , Route, NavLink } from 'react-router-dom';
// import Com2 from './component2';
// import Com1 from './component1';
// import Com3 from './component3';
import Com4 from './component4';
import Profile from './profile'
 import Navgation from './navLink'
import App1 from './123component';
import Com2 from './component2';
import HomePage from './component2';
import CarDetails from './carDetails';
import MapContainer from './MapContainer';

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
        <NavLink to="/">Home</NavLink>
        </div>
       <div>
        <Navgation/>
           <Route path="/" component={HomePage} exact />
           <Route path="/com4" component={Com4} exact />
           <Route path="/App1" component={App1} exact />
           <Route path="/MapContainer" component={MapContainer} exact/>
           <Route path="/car-details" component={CarDetails} exact />
           
          </div>  
      </div>
      </BrowserRouter>
      
    );
    }
  }
  
export default App;

