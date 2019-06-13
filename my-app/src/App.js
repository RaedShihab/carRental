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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user_id: '0'
    }
  }
 
  // setUserId(idd) {
  //   console.log(idd)
  //   this.setState({
  //     user_id: idd
  //   });
  // }
render(){
  // console.log(this.state.password);
    return (
      
      <div>
        <BrowserRouter>
        <Navgation/>
          <Route path="/com4" component={Com4} exact />
          <Route path="/App1" component={App1} exact />
          {/* <Route path="/Profile" component={()=>(
            <Profile user_id={this.state.user_id}/>
          )} exact />
          <Route path="/com2" component={()=>(
            <Com2 setUserId={this.setUserId.bind(this)}/>
          )} exact /> */}
        
          </BrowserRouter>
           </div>
    );
    }
  }
  
  export default App;

