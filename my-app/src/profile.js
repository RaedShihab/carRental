import React from 'react';


// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');

// class Parent extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       isHidden: true
//     }
//   }
//   toggleHidden () {
//     this.setState({
//       isHidden: !this.state.isHidden
//     })
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.toggleHidden.bind(this)} >
//           Change car data from here
//         </button>
//         {!this.state.isHidden && <Profile />}
//         {!this.state.isHidden && <Update />}
//         {!this.state.isHidden && <Delete />}
//       </div>
//     )
//   }
// }
////////////////////////////
// class Parent2 extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       isHidden: true
//     }
//   }
//   toggleHidden () {
//     this.setState({
//       isHidden: !this.state.isHidden
//     })
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.toggleHidden.bind(this)} >
//           Click to show modal
//         </button>
//         {!this.state.isHidden && <Update />}
//       </div>
//     )
//   }
// }
// /////////////////////////////////////
// class Parent3 extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       isHidden: true
//     }
//   }
//   toggleHidden () {
//     this.setState({
//       isHidden: !this.state.isHidden
//     })
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.toggleHidden.bind(this)} >
//           Click to show modal
//         </button>
//         {!this.state.isHidden && <Delete />}
//       </div>
//     )
//   }
//}
//////////////////////////////
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      year: '',
      make: '',
      model: '',
      carCode: '',
      user_id: '',

      updateaddress: '',
      updateyear: '',
      updatemake: '',
      updatemodel: '',
      carCode2: '',
      carCode3: '',
      
      wifi: '',
      autoorgear: '',
      pricePerHour: '',
      capacity: '',
    }
    // const state1 = this.props
     console.log(this.state.user_id, 'fsfsd')
     console.log(this.props.location.aboutProps.data,'kkkkkkkkkkkkkk')
  }

  handelChangewifi(e) {
    this.setState({
      wifi: e.target.value,
    });
    console.log(this.state.wifi);
   }
   handelChangeautoorgeare(e) {
     this.setState({
       autoorgear: e.target.value,
     })
     console.log(this.state.autoorgear);
   }
   handelChangepricePerHour(e) {
     this.setState({
       pricePerHour: e.target.value,
     })
     console.log(this.state.pricePerHour);
   }
   handelChangecapacity(e) {
     this.setState({
       capacity: e.target.value,
     })
     console.log(this.state.capacity);
   }



  getId() {
      this.setState({
          user_id: this.props.location.aboutProps.data
      } , ()=> console.log(this.props.location.aboutProps.data, 'uuuuuu') )

  }

  handelForigenId(e) {
    this.setState({
      user_id: e.target.user_id,
    });
          console.log(this.state.user_id);
   }

  componentDidMount() {
    // console.log(this.props.history.location.state.res)
    this.getId();
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

   handelChangecarCode(e) {
    this.setState({
      carCode: e.target.value,
    });
         console.log(this.state.carCode);
   }

   

   addCarData(e) {
    e.preventDefault();

    var body = {
        address: this.state.address,
        year: this.state.year,
        make: this.state.make,
        model: this.state.model ,
        user_id: this.state.user_id,
        carCode: this.state.carCode,
        wifi: this.state.wifi,
        autoorgear: this.state.autoorgear,
        pricePerHour: this.state.pricePerHour,
        capacity: this.state.capacity
    }
    fetch('http://localhost:3001/user/changcar', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      
    }).then((data) => {
      console.log('come back from server',data);
    });
  }

    render(){
      // console.log(this.props.user_id)

      return (
        <div>
          <h1 className="h3 mb-3font-weight-normal">Welcome to your profile</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
          <h1 className="h3 mb-3font-weight-normal">List your car</h1>

          <input className='form-control'
          onChange={this.handelForigenId.bind(this)}
            type='Number' value={this.state.user_id}/>

          {/* {console.log(this.state.user_id)} */}
            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.address}  placeholder="add adress"
            onChange={this.handelChangeaddress.bind(this)} />
            </div>
          
        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.year}  placeholder="add Year"
            onChange={this.handelChangeyear.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.make}  placeholder="add Make"
            onChange={this.handelChangemake.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.model}  placeholder="add Model"
            onChange={this.handelChangemodel.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.carCode}  placeholder="enter car code"
            onChange={this.handelChangecarCode.bind(this)} />
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.wifi}  placeholder="there is any enternet inside the car ?"
            onChange={this.handelChangewifi.bind(this)} />
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.autoorgear}  placeholder="enter car type (gear or outomatic ?)"
            onChange={this.handelChangeautoorgeare.bind(this)} />
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.pricePerHour}  placeholder="How match price per hour"
            onChange={this.handelChangepricePerHour.bind(this)} />
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.capacity}  placeholder="what is the capacity for the car"
            onChange={this.handelChangecapacity.bind(this)} />
        </div>

           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.addCarData.bind(this)} >add a car</button>

          </div>
         </div>
         </div>
        </div>
       
      );
      }
    }
   
    export default Profile;
    

