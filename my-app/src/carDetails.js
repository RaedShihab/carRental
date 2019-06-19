import React from 'react';

class CarDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        CarDetails: '',
      }
    }

    bookCare(e) {
        e.preventDefault();
        var body = {
            ragisterId : this.state.CarDetails.ragisterId,
            id : this.state.CarDetails.id,
        }
        console.log(body)
        fetch('http://localhost:3001/user/bookCar', {
          method: 'PUT',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(body)
          
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
             console.log('come back from database',data);
        //   this.setState({
        //     // carData : data.status,
        //     carData : data.filterdData,
        //     dispalyCarList: true
        //   })
        })
      }

    getId() {
        this.setState({
         CarDetails: this.props.history.location.state.res
          } ,()=> console.log(this.props.history.location.state.res, '////////'))
       }
       componentDidMount() {
           this.getId();
         }
       
    render(){
        return (
     <div>
  <table class="table table-bordered" >
                <thead class="grey lighten-2">
                  <tr> 
                    <th scope="col" >WIFI</th> 
                    <th scope="col">Gear</th>
                    <th scope="col" >Price per hour</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Company</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>{this.state.CarDetails.wifi}</td> 
                        <td >{this.state.CarDetails.autoorgear}</td>
                        <td >{this.state.CarDetails.pricePerHour}</td>
                        <td >{this.state.CarDetails.capacity}</td>
                        <td >{this.state.CarDetails.companyName}</td>
                      </tr>
                </tbody>
              </table> 
            <div>
                <button onClick={this.bookCare.bind(this)}
                className='btn btn-g btn-primary btn-block'>
                    Book the car
                </button>
            </div>
     </div>           
        );
        }
}

export default CarDetails;