import React from 'react';


class Com1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      any: '',
    }
  }

  handelChange(e) {
    this.setState({
      any: e.target.value,
    });
    console.log(this.state.any);
  }

  sendToServer(e) {
    e.preventDefault();
    var body = {
      any: this.state.any
    }
    fetch('http://localhost:3001/test', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log('come back from server',data);
      // this.setState({
      //   any: data,
      //   dispalyMealList: true
      // })
    });
  }

    render(){
      return (
        
        <div>
            <input type='text' value={this.state.any} 
            onChange={this.handelChange.bind(this)}
            />
           
           <button type='submit' onClick={this.sendToServer.bind(this)} >submit</button>
          </div>
      );
      }
    }

    export default Com1;