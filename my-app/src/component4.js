import React from 'react';


class Com4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      year: '',
      make: '',
      model: '',
      carData: [],
      dispalyCarList: false
    }
  }

  searchCarData(e) {
    e.preventDefault();
    var body = {
        'address' : this.state.address
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
      //  console.log('come back from database',data.status);
      this.setState({
        // carData : data.status,
        carData : data,
        dispalyCarList: true
      })
      // console.log('and here',data.status)
    })
  }

  

  handelChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
         console.log(this.state.address);
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
            <CarList greeting={'this.state.carData'}/> :
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
            {this.props.greeting}
          </div>
          
          // <div>{
          //   this.props.greeting.length > 0 ?
          //     <table >
          //       <thead>
          //         <tr>
          //           <th>address</th>
          //           <th>year</th>
          //           <th>make</th>
          //           <th>model</th>
          //         </tr>
          //       </thead>
          //       <tbody>
          //         {
          //           this.props.greeting.map((car, i) => {
          //             return <tr key={i} value={car} >
          //               {console.log(car.dataValues.Address)}
          //               <td>{car.dataValues.Address}</td>
          //               <td>{car.dataValues.year}</td>
          //               <td>{car.dataValues.make}</td>
          //               <td>{car.dataValues.model}</td>
          //             </tr>
    
          //           })
          //         }
          //       </tbody>
          //     </table> : 'Sorry'
    
          // }
          // </div>
        )
      }
    }

    export default Com4;


//     class CarList extends  React.Component {
//       render() {
//         return<div>
//           {this.props.greeting > 0?
//            <p>
//   <table>
//   <tr>
//     <th>address</th>
//     <th>year</th> 
//     <th>make</th>
//     <th>model</th>
//   </tr>
//   <tr>
//     <td>{this.props.greeting.address}</td>
//     <td>{this.props.greeting.year}</td> 
//     <td>{this.props.greeting.make}</td>
//     <td>{this.props.greeting.model}</td>
//   </tr>
// </table>
//         </p>
//           }
//         </div> 
       
//       }
//     }




    //   handelChangeyear(e) {
//     this.setState({
//       year: e.target.value,
//     });
//     console.log(this.state.year);
//   }
//   handelChangemake(e) {
//     this.setState({
//       make: e.target.value,
//     });
//     console.log(this.state.make);
//   }
//   handelChangemodel(e) {
//     this.setState({
//       model: e.target.value,
//     });
//     console.log(this.state.model);
//   }



/* <div className='form-group'>
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
       
        </div> */