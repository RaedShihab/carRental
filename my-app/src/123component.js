 import React from 'react';


 import { BrowserRouter , Route } from 'react-router-dom';


// import './App.css';
 import Com2 from './component2';
 import Com1 from './component1';
 import Com3 from './component3';
 import Profile from './profile';
  import Nav2 from './nav2'

class App1 extends React.Component {

  render(){
    return (
      
      <div>
        <BrowserRouter>
        <Nav2/>

          <Route path='/com2' component={Com2} exact/>
          <Route path="/com1" component={Com1} exact />
          <Route path="/com3" component={Com3} exact />
          <Route path="/profile" component={Profile} exact />
          </BrowserRouter>
           </div>
    );
    }
  }
  
  export default App1;