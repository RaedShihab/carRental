import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
// import Com2 from './component2';
// import Com1 from './component1';
// import Com3 from './component3';
import Com4 from './component4';
import Profile from './profile'
 import Navgation from './navLink'
import App1 from './123component';
import Com2 from './component2';
import CarDetails from './carDetails';
import MapContainer from './MapContainer';
var style = {
  color: 'black'
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  }
  }
 
  
render(){
    return (

      <div>
       <div>
         <BrowserRouter>
         <Navgation/>
           <Route path="/com4" component={Com4} exact />
           <Route path="/App1" component={App1} exact />
           <Route path="/MapContainer" component={MapContainer}/> 
           <Route path="/car-details" component={CarDetails} exact />
         </BrowserRouter>
          </div>
          
      </div>
      
      
    );
    }
  }
  
  export default App;

