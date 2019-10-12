import React from "react";
// component to allow company update car details
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      year: "",
      make: "",
      model: "",
      carCode: "",
      user_id: "",
      status: "",

      updateaddress: "",
      updateyear: "",
      updatemake: "",
      updatemodel: "",
      carCode2: "",
      carCode3: ""
    };
    // const state1 = this.props
    // console.log(this.state.user_id, 'fsfsd')
  }
  // update user id (company id) every time rendering the component
  getId() {
    this.setState({
      user_id: this.props.location.aboutProps.data
    });
  }
  componentDidMount() {
    // console.log(this.props.history.location.state.res)
    this.getId();
  }
  // Handle Change:
  handelstatus(e) {
    this.setState({
      status: e.target.status
    });
    console.log(this.state.status);
  }

  handelForigenId(e) {
    this.setState({
      user_id: e.target.user_id
    });
    console.log(this.state.user_id);
  }

  //// making handels changes for all inputs //////////////////////////////////////

  handelHange = e => {
    let value = e.target.name;
    this.setState({
      [value]: e.target.value
    });
  };
  //function to update car data in the database
  updateCarData(e) {
    e.preventDefault();
    var body = {
      updateaddress: this.state.updateaddress,
      updateyear: this.state.updateyear,
      updatemake: this.state.updatemake,
      updatemodel: this.state.updatemodel,
      user_id: this.state.user_id,
      carCode2: this.state.carCode2,
      status: this.state.status
    };

    fetch("http://localhost:3001/user/updatecar", {
      method: "PUT",
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <h1 className="h3 mb-3font-weight-normal">Update a car</h1>

            <input
              className="form-control"
              onChange={this.handelHange}
              type="Number"
              value={this.state.user_id}
            />

            {/* {console.log(this.state.user_id)} */}
            <div className="form-group">
              <input
                name="updateaddress"
                className="form-control"
                type="text"
                value={this.state.updateaddress}
                placeholder="updated adress"
                onChange={this.handelHange}
              />
            </div>

            <div className="form-group">
              <input
                name="updateyear"
                className="form-control"
                type="text"
                value={this.state.updateyear}
                placeholder="updated Year"
                onChange={this.handelHange}
              />
            </div>

            <div className="form-group">
              <input
                name="updatemake"
                className="form-control"
                type="text"
                value={this.state.updatemake}
                placeholder="updated Make"
                onChange={this.handelHange}
              />
            </div>

            <div className="form-group">
              <input
                name="updatemodel"
                className="form-control"
                type="text"
                value={this.state.updatemodel}
                placeholder="updated Model"
                onChange={this.handelHange}
              />
            </div>
            <div>
              <input
                name="carCode2"
                className="form-control"
                type="text"
                value={this.state.carCode2}
                placeholder="enter car code"
                onChange={this.handelHange}
              />
            </div>

            <div>
              <input
                name="status"
                className="form-control"
                type="text"
                value={this.state.status}
                placeholder="inter new status"
                onChange={this.handelstatus.bind(this)}
              />
            </div>

            <button
              className="btn btn-g btn-primary btn-block"
              type="submit"
              onClick={this.updateCarData.bind(this)}
            >
              update
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Update;
