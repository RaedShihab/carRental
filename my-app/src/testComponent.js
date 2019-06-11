import React from 'react';
import { BrowserRouter , Route, Redirect } from 'react-router-dom';
import Com2 from './component2';

class Test extends React.Component {
    state = {
        submitEvent: false
    }

    submitEventHandle = () => {
        this.setState({submitEvent:true})
    }

    render(){
      return (
        
        <div>
            <BrowserRouter>
            <h1>HHHHELLLOOOOO</h1>
          <Route path='/search' render={()=>(
              this.state.submitEvent ? (<Com2/>) : (<Redirect to='/'/>)
          )} />

          <button type='submit' 
        //   onClick={this.submitEvent.bind(this)}
          >Redirect</button>
            </BrowserRouter>
            </div>          
      );
      }
    }
    
    export default Test;