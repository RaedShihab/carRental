import React from "react";
// make delete function to give the company ability to delete a car
class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      year: "",
      make: "",
      model: "",
      carCode: "",
      user_id: "",

      updateaddress: "",
      updateyear: "",
      updatemake: "",
      updatemodel: "",
      carCode2: "",
      carCode3: ""
    };
  }

  getId() {
    this.setState(
      {
        user_id: this.props.location.aboutProps.data
      },
      () => console.log(this.props.location.aboutProps.data, "uuuuuu")
    );
  }

  handelForigenId(e) {
    this.setState({
      user_id: e.target.user_id
    });
    console.log(this.state.user_id);
  }

  componentDidMount() {
    // console.log(this.props.history.location.state.res)
    this.getId();
  }

  handelChangecarCode3(e) {
    this.setState({
      carCode3: e.target.value
    });
    console.log(this.state.carCode3);
  }

  deleteCarData(e) {
    e.preventDefault();
    var body = {
      carCode3: this.state.carCode3,
      user_id: this.state.user_id
    };
    fetch("http://localhost:3001/user/deletecar", {
      method: "DELETE",
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
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <h1 className="h3 mb-3font-weight-normal">Delete a car</h1>

              <div className="form-group">
                <input
                  className="form-control"
                  onChange={this.handelForigenId.bind(this)}
                  type="Number"
                  value={this.state.user_id}
                />
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.carCode3}
                  placeholder="enter car code"
                  onChange={this.handelChangecarCode3.bind(this)}
                />
              </div>

              <button
                className="btn btn-g btn-primary btn-block"
                type="submit"
                onClick={this.deleteCarData.bind(this)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Delete;
