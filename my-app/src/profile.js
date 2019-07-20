import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      area: '',
      year: '',
      make: '',
      model: '',
      carCode: '',
      user_id: '',
      user_phonenumber:'',

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
      status: '',
      companyLocationLat: '',
      companyLocationLong: ''
    }
    // const state1 = this.props
    //  console.log(this.state.user_id, 'fsfsd')
    //  console.log(this.props.location.aboutProps.data,'kkkkkkkkkkkkkk')
  }
  
  handelChangestatus(e) {
    this.setState({
      status: e.target.value,
    });
    console.log(this.state.status);
   }

   handelChangecompanyLocationLat(e) {
    this.setState({
      companyLocationLat: e.target.value,
    });
    console.log(this.state.companyLocationLat);
   }

   handelChangecompanyLocationLong(e) {
     this.setState({
      companyLocationLong: e.target.value
     })
     console.log(this.state.companyLocationLong)
    }

  handelChangearea(e) {
    this.setState({
      area: e.target.value,
    });
    console.log(this.state.area);
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
      } , ()=> console.log(this.props.location, 'uuuuuu') )

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
        area : this.state.area,
        year: this.state.year,
        make: this.state.make,
        model: this.state.model ,
        user_id: this.state.user_id,
        carCode: this.state.carCode,
        wifi: this.state.wifi,
        autoorgear: this.state.autoorgear,
        pricePerHour: this.state.pricePerHour,
        capacity: this.state.capacity,
        status: this.state.status,
        companyLocationLat: this.state.companyLocationLat,
        companyLocationLong: this.state.companyLocationLong
    }
    console.log(body)
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

            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.address}  placeholder="add adress"
            onChange={this.handelChangeaddress.bind(this)} />
            </div>

            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.area}  placeholder="add area"
            onChange={this.handelChangearea.bind(this)} />
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
        type='text' value={this.state.carCode}  placeholder="Car Plate Number, should be unique. "
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

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.status}  placeholder="Enter available for the first time"
            onChange={this.handelChangestatus.bind(this)} />
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.companyLocationLat}  placeholder="ex. Lat: 32.5565"
            onChange={this.handelChangecompanyLocationLat.bind(this)} />
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.companyLocationLong}  placeholder="ex. Long: 32.5565"
            onChange={this.handelChangecompanyLocationLong.bind(this)} />
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