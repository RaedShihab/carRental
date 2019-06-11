import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
// import Com2 from './component2';
// import Com1 from './component1';
// import Com3 from './component3';
import Com4 from './component4';

 import Navgation from './navLink'
import App1 from './123component';
import Test from './testComponent'

class App extends React.Component {

  render(){
    return (
      
      <div>
        <BrowserRouter>
        <Navgation/>

          {/* <Route path='/com2' component={Com2} exact/>
          <Route path="/com1" component={Com1} exact />
          <Route path="/com3" component={Com3} exact /> */}
          <Route path="/com4" component={Com4} exact />
          <Route path="/App1" component={App1} exact />
          <Route path="/test" component={Test} exact /> 
          

          </BrowserRouter>
           </div>
    );
    }
  }
  
  export default App;

