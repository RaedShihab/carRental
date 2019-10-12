import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      area: "",
      year: "",
      make: "",
      model: "",
      carCode: "",
      user_id: "",
      user_phonenumber: "",

      updateaddress: "",
      updateyear: "",
      updatemake: "",
      updatemodel: "",
      carCode2: "",
      carCode3: "",

      wifi: "",
      autoorgear: "",
      pricePerHour: "",
      capacity: "",
      status: "",
      companyLocationLat: "",
      companyLocationLong: ""
    };
  }

  handelChang = e => {
    let value = e.target.name;
    this.setState({
      [value]: e.target.value
    });
  };

  getId() {
    this.setState(
      {
        user_id: this.props.location.aboutProps.data
      },
      () => console.log(this.props.location, "uuuuuu")
    );
  }

  componentDidMount() {
    // console.log(this.props.history.location.state.res)
    this.getId();
  }
  // sending car details to backend to save it in database and create a new car
  addCarData(e) {
    e.preventDefault();

    var body = {
      address: this.state.address,
      area: this.state.area,
      year: this.state.year,
      make: this.state.make,
      model: this.state.model,
      user_id: this.state.user_id,
      carCode: this.state.carCode,
      wifi: this.state.wifi,
      autoorgear: this.state.autoorgear,
      pricePerHour: this.state.pricePerHour,
      capacity: this.state.capacity,
      status: this.state.status,
      companyLocationLat: this.state.companyLocationLat,
      companyLocationLong: this.state.companyLocationLong
    };
    console.log(body);
    fetch("http://localhost:3001/user/changcar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(response => {})
      .then(data => {
        console.log("come back from server", data);
      });
  }

  render() {
    // console.log(this.props.user_id)

    return (
      <div>
        <h1 className="h3 mb-3font-weight-normal">Welcome to your profile</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <h1 className="h3 mb-3font-weight-normal">List your car</h1>

              <input
                name="user_id"
                className="form-control"
                onChange={this.handelChang}
                type="Number"
                value={this.state.user_id}
              />

              <div className="form-group">
                <input
                  name="address"
                  className="form-control"
                  type="text"
                  value={this.state.address}
                  placeholder="add adress"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="area"
                  className="form-control"
                  type="text"
                  value={this.state.area}
                  placeholder="add area"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="year"
                  className="form-control"
                  type="text"
                  value={this.state.year}
                  placeholder="add Year"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="make"
                  className="form-control"
                  type="text"
                  value={this.state.make}
                  placeholder="add Make"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="model"
                  className="form-control"
                  type="text"
                  value={this.state.model}
                  placeholder="add Model"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="carCode"
                  className="form-control"
                  type="text"
                  value={this.state.carCode}
                  placeholder="Car Plate Number, should be unique. "
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="wifi"
                  className="form-control"
                  type="text"
                  value={this.state.wifi}
                  placeholder="there is any enternet inside the car ?"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="autoorgear"
                  className="form-control"
                  type="text"
                  value={this.state.autoorgear}
                  placeholder="enter car type (gear or outomatic ?)"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="pricePerHour"
                  className="form-control"
                  type="text"
                  value={this.state.pricePerHour}
                  placeholder="How match price per hour"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="capacity"
                  className="form-control"
                  type="text"
                  value={this.state.capacity}
                  placeholder="what is the capacity for the car"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="status"
                  className="form-control"
                  type="text"
                  value={this.state.status}
                  placeholder="Enter available for the first time"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="companyLocationLat"
                  className="form-control"
                  type="text"
                  value={this.state.companyLocationLat}
                  placeholder="ex. Lat: 32.5565"
                  onChange={this.handelChang}
                />
              </div>

              <div className="form-group">
                <input
                  name="companyLocationLong"
                  className="form-control"
                  type="text"
                  value={this.state.companyLocationLong}
                  placeholder="ex. Long: 32.5565"
                  onChange={this.handelChang}
                />
              </div>

              <button
                className="btn btn-g btn-primary btn-block"
                type="submit"
                onClick={this.addCarData.bind(this)}
              >
                add a car
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
