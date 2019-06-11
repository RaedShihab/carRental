import React from 'react';


class Com4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      carData:'',
      dispalyCarList: false
    }
  }

  searchCarData(e) {
    e.preventDefault();
    var body = {
        address : this.state.address,
        // year: this.state.year,
        // make: this.state.make,
        // model: this.state.model 
    }
    
    fetch('http://localhost:3001/user/search', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
      
    }).then((res) => {
      return res.json();
    })
    .then((data) => {
        // console.log('come back from database',data);
      this.setState({
        // carData : data.status,
        carData : data.filterdData,
        dispalyCarList: true
      })
       console.log('and here',this.state.carData.filterdData)
    })
  }

  

  handelChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
        //  console.log(this.state.address);
   }

    render(){
      return (
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
          <h1 className="h3 mb-3font-weight-normal">Enter your location</h1>
          
            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.address}  placeholder="address"
            onChange={this.handelChangeaddress.bind(this)} />
            </div>

           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.searchCarData.bind(this)} >Search</button>

            { this.state.dispalyCarList ? 
            <CarList greeting={this.state.carData} /> :
        
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
        <div>{
          
          //  <h1>{this.props.greeting[0].address}</h1>
            //  this.props.greeting.map((car, i) => {
            //           console.log('ggg',car)
            //           return car;
            //         }
                      
          //             return <tr key={i} value={car} >
          //               {console.log(car.address)}
          //               <td>{car.address}</td>
          //               <td>{car.year}</td>
          //               <td>{car.make}</td>
          //               <td>{car.model}</td>
           
          // <div>{
          
            this.props.greeting.length > 0 ?
              <table >
                <thead>
                  <tr>
                    <th>address</th>
                    <th>year</th>
                    <th>make</th>
                    <th>model</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.greeting.map((car, i) => {
                      console.log('ggg',car)
                      return <tr key={i} value={car} >
                        {console.log(car.address)}
                        <td>{car.address}</td>
                        <td>{car.year}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
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
