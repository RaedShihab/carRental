import React from 'react';

// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      year: '',
      make: '',
      model: ''
    }
    // const state1 = this.props
  }

  componentDidMount(){
    console.log(this.props.history.location.state.res, "from profile")
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
          console.log(this.state.address);
   }
   handelChangemake(e) {
    this.setState({
      make: e.target.value,
    });
          console.log(this.state.address);
   }
   handelChangemodel(e) {
    this.setState({
      model: e.target.value,
    });
          console.log(this.state.address);
   }


   changeCarData(e) {
    e.preventDefault();
    var body = {
        address: this.state.address,
        year: this.state.year,
        make: this.state.make,
        model: this.state.model 
    }
    
    fetch('http://localhost:3001/user/changcar', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then((response) => {
      
    }).then((data) => {
      console.log('come back from server',data);
      // this.setState({
      //   any: data,
      //   dispalyMealList: true
      // })
    });
  }
  

    render(){
      // console.log(this.props.user_id)
      return (
        
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-5 mx-auto'>
          <h1 className="h3 mb-3font-weight-normal">Welcome</h1>
          
            <div className='form-group'>
            <input className='form-control'
            type='text' value={this.state.address}  placeholder="updated adress"
            onChange={this.handelChangeaddress.bind(this)} />
            </div>
          
        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.year}  placeholder="updated Year"
            onChange={this.handelChangeyear.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.make}  placeholder="updated Make"
            onChange={this.handelChangemake.bind(this)} />
       
        </div>

        <div className='form-group'>
        <input className='form-control' 
        type='text' value={this.state.model}  placeholder="updated Model"
            onChange={this.handelChangemodel.bind(this)} />
       
        </div>

           <button 
           className='btn btn-g btn-primary btn-block' 
           type='submit' onClick={this.changeCarData.bind(this)} >Add</button>

          </div>
         </div>
         </div>
      );
      }
    }


   
    export default Profile;
