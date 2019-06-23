import React from 'react';
import './style.css'

import Marker from './MapContainer'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');


class Com4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      carData:'',
      carDetails: '',
      area: '',
      dispalyCarList: false
    }
  }

  handleClick() {
    console.log('Hi')
  }
  
  searchCarData(e) {
    e.preventDefault();
    var body = {
        address : this.state.address,
        area : this.state.area,
    }
    fetch('http://localhost:3001/user/search', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
      
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
         console.log('come back from database',data);
      this.setState({
        // carData : data.status,
        carData : data.filterdData,
        dispalyCarList: true
      })
       console.log('and here',this.state.carData)
    })
  }

  sendCarDetails(e, carObj) {
    e.preventDefault();
    console.log(carObj);
    console.log('oooooooooooookkkkkkkkkkkkkk')
    const  body = carObj;
    fetch('http://localhost:3001/user/carDetails', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carObj)
    }).then((response) => {
      return response.json();
    }).then((data) => {
       console.log(data.car,'this is what you want');
      this.props.history.push('/car-details', {res:data.car});
    })  
  }

  

  handelChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
        //  console.log(this.state.address);
   }

   handelChangearea(e) {
    this.setState({
      area: e.target.value,
    });
       console.log(this.state.area);
   }

    render(){
      return (
        
        
        <div className='container'>
          
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
          <h1 className="h3 mb-3font-weight-normal">Enter your location</h1>
          
            <div className='form-group' >
            <input value={this.state.address}
            onChange={this.handelChangeaddress.bind(this)}
            type="text" class="form-control form-control-lg" placeholder="Enter the city..." />
            </div>

            <div className='form-group' >
            <input value={this.state.area}
            onChange={this.handelChangearea.bind(this)}
            type="text" class="form-control form-control-lg" placeholder="Enter area..." />
            </div>

           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.searchCarData.bind(this)} >Search</button>

            { this.state.dispalyCarList ? 
            <CarList greeting={this.state.carData} sendCarDetails={this.sendCarDetails.bind(this)} /> :
              null
            }
            
          </div>
         </div>
         </div>
      );
      }
    }


    class CarList extends React.Component {
      render(props) {
        return (
          <div>
               {
            this.props.greeting.length > 0 ?
              <table class="table table-bordered" >
                <thead class="grey lighten-2">
                  <tr> 
                    <th scope="col" >address</th> 
                    <th scope="col">year</th>
                    <th scope="col" >make</th>
                    <th scope="col">model</th>
                    <th scope="col">company</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.greeting.map((car, i) => {
                      console.log('ggg',car)
                      return <tr key={i} value={car}>
                        <td>{car.address}</td> 
                        <td >{car.year}</td>
                        <td >{car.make}</td>
                        <td >{car.model}</td>
                        <td >{car.companyName}</td> 
                        <td >{car.status}</td> <button className='btn btn-g btn-primary btn-block' onClick={(event) => this.props.sendCarDetails(event, car)}>Show details</button>
                      </tr>
    
                    })
                  }
                </tbody>
              </table> : 'Sorry'
        }
              
         </div>  
        )
      }
    }
    
    export default Com4;
