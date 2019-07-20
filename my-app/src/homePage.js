
import React from 'react';
import App from './App'
import Navgation from './navLink'
import { BrowserRouter , Route, NavLink } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    }
    }

    render() {
        return (
       <div>
        <div>
         <div>
       <header class="masthead text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5">Choose your best car with the best companies and prices</h1>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
              </div>
              <div class="col-12 col-md-3">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
  <div>
  </div>
 <section class="features-icons bg-light text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="fas fa-car m-auto text-primary"></i>
            </div>
            <h3>Car rent becomes easier!</h3>
            <p class="lead mb-0">Make a connection between Companieis and clients</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="fas fa-building m-auto text-primary"></i>
            </div>
            <h3>For car Rental companies</h3>
            <p class="lead mb-0">Make a profile and start enter your car data</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <i class="fa fa-user m-auto text-primary"></i>
              
            </div>
            <h3>For normal user</h3>
            <p class="lead mb-0">If you are normal user just put the city and the area that you want!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="showcase">
    <div class="container-fluid p-0">

      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url(https://www.enterprise.com/content/dam/ent-brand/GettyImages-453470317_1920x1080.jpg)'}}></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>How to rent a car!</h2>
          <p class="lead mb-0">Just put your city and the area that you want and you will see all the cars around you with all necessary information about these cars, so after that you can choose what ever you want </p>
        </div>
      </div>

      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url(https://www.jodhpurtaxiwala.com/wp-content/uploads/2019/02/default-insurance-tips.jpg)'}}></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>How to get the car!</h2>
          <p class="lead mb-0">After you decide the car that you want you can book it, call the company, and go to its location and you will see company employee with the key so you can begin the ride right now</p>
        </div>
      </div>

      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url(https://media.istockphoto.com/videos/woman-getting-new-car-keys-video-id847698878?s=640x640)'}}></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>After you finish the ride!</h2>
          <p class="lead mb-0">after you finish the ride, please return it bace to the same location and you also will see the employee there so you can gine hem the key!</p>
        </div>
      </div>

      
    </div>
  </section>

  <footer class="footer bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul class="list-inline mb-2">
            <li class="list-inline-item">
              <a href="#">About</a>
            </li>
            <li class="list-inline-item">&sdot;</li>
            <li class="list-inline-item">
              <a href="#">Contact</a>
            </li>
            <li class="list-inline-item">&sdot;</li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
            <li class="list-inline-item">&sdot;</li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2019. All Rights Reserved.</p>
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mr-3">
              <a href="#">
                <i class="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item mr-3">
              <a href="#">
                <i class="fab fa-twitter-square fa-2x fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-instagram fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
            </div>
            </div>
            </div>
        )
    
    }
}
export default HomePage;