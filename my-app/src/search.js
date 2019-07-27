import React from "react";
import "./style.css";
import "./App.css";
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');

// making search component
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      carData: "",
      carDetails: "",
      area: "",
      dispalyCarList: false
    };
  }

  handleClick() {
    console.log("Hi");
  }

  searchCarData(e) {
    e.preventDefault();
    var body = {
      address: this.state.address,
      area: this.state.area
    };
    fetch("http://localhost:3001/user/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("come back from database", data);
        this.setState({
          // carData : data.status,
          carData: data.filterdData,
          dispalyCarList: true
        });
        console.log("and here", this.state.carData);
      });
  }

  sendCarDetails(e, carObj) {
    e.preventDefault();
    //console.log(carObj);
    //console.log('oooooooooooookkkkkkkkkkkkkk')
    const body = carObj;
    fetch("http://localhost:3001/user/carDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carObj)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data.car,'this is what you want');
        this.props.history.push("/car-details", { res: data.car });
      });
  }

  handelChangeaddress(e) {
    this.setState({
      address: e.target.value
    });
    //  console.log(this.state.address);
  }

  handelChangearea(e) {
    this.setState({
      area: e.target.value
    });
    console.log(this.state.area);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card card-signin flex-row my-5">
              {/* <div class="card-img-left d-none d-md-flex"> */}
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Enter your location</h5>
              <form class="form-signin">
                <div className="form-label-group">
                  <input
                    value={this.state.address}
                    onChange={this.handelChangeaddress.bind(this)}
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter the city..."
                  />
                </div>

                <div className="form-label-group">
                  <input
                    value={this.state.area}
                    onChange={this.handelChangearea.bind(this)}
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter area..."
                  />
                </div>

                <button
                  className="btn btn-g btn-primary btn-block"
                  type="submit"
                  onClick={this.searchCarData.bind(this)}
                >
                  Search
                </button>

                {this.state.dispalyCarList ? (
                  <CarList
                    greeting={this.state.carData}
                    sendCarDetails={this.sendCarDetails.bind(this)}
                  />
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// this component to render the table after click search
class CarList extends React.Component {
  render(props) {
    return (
      <div>
        {this.props.greeting.length > 0 ? (
          <table
            class="table table-bordered table-striped Tabel"
            style={{ width: "225px" }}
          >
            <thead class="grey lighten-2">
              <tr className="TheMainInfo">
                <th scope="col MealsR">address</th>
                <th scope="col MealsR">year</th>
                <th scope="col MealsR">make</th>
                <th scope="col MealsR">model</th>
                <th scope="col MealsR">company</th>
                <th scope="col MealsR">phone number</th>
                <th scope="col MealsR">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.greeting.map((car, i) => {
                console.log("ggg", car);
                return (
                  <tr key={i} value={car}>
                    <td>{car.address}</td>
                    <td>{car.year}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.companyName}</td>
                    <td>{car.carCode}</td>
                    <td>{car.status}</td>{" "}
                    <button
                      className="btn btn-g btn-primary btn-block"
                      onClick={event => this.props.sendCarDetails(event, car)}
                    >
                      Show details
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          "Sorry"
        )}
      </div>
    );
  }
}

export default Search;
