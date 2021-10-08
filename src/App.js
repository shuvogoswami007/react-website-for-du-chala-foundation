import logo from './logo.svg';
import './App.css';
import {Button , Form , FormGroup ,Label , Input} from 'react-bootstrap';




function App() {
  return (
    <form className="login-form">
      <h1 className="head"><b>CNG SERVICE</b></h1>
      <div className="head">
      <h6>Name</h6>
       <input type="text" placeholder="Name"></input>
      </div>
      <br></br>
      <div className="head">
      <h6>Phone Number</h6>
      <input type="tel" placeholder="Phone Number"></input>
      </div>
      <br></br>
     
     <div className="head"> <h6>Address</h6>
      <input type="text" placeholder="Address"></input>
      </div>
      <br></br>
      <div className="head">
      <h6>Provided Details</h6>
      <input type="text" placeholder="Provided Details"></input>
      </div>
    </form>

    
  );
}

export default App;
