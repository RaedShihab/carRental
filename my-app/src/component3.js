import React from 'react';


class Com3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      year: '',
      make: '',
      model: ''
    }
  }

  RegistCarData(e) {
    e.preventDefault();
    var body = {
        address: this.state.address,
        year: this.state.year,
        make: this.state.make,
        model: this.state.model 
    }
    
    fetch('http://localhost:3001/user/list-your-car', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      
    }).then((data) => {
      console.log('come back from server',data);
      // this.setState({
      //   any: data,
      //   dispalyMealList: true
      // })
    });
  }

  

  handelChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
    console.log(this.state.address);
  }
  handelChangeyear(e) {
    this.setState({
      year: e.target.value,
    });
    console.log(this.state.year);
  }
  handelChangemake(e) {
    this.setState({
      make: e.target.value,
    });
    console.log(this.state.make);
  }
  handelChangemodel(e) {
    this.setState({
      model: e.target.value,
    });
    console.log(this.state.model);
  }

    render(){
      return (
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
          <h1 className="h3 mb-3font-weight-normal">List your car</h1>
          
            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.address}  placeholder="adress"
            onChange={this.handelChangeaddress.bind(this)} />
            </div>
          
        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.year}  placeholder="Year"
            onChange={this.handelChangeyear.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.make}  placeholder="Make"
            onChange={this.handelChangemake.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.model}  placeholder="Model"
            onChange={this.handelChangemodel.bind(this)} />
       
        </div>

           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.RegistCarData.bind(this)} >Add</button>

          </div>
         </div>
         </div>
      );
      }
    }

    export default Com3;