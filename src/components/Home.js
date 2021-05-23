import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="overlay">
      <div className="memb_tool">
        <h1 id="inv_h1">Invoice Membership Tool</h1>
      </div>
      <div className="Home">  
           <input type="text" placeholder="Enter VIN Number" id = "input_home"></input>
           <Link to ="/inside">
           <button type="submit" id="button_home" >Search</button>
           </Link>
      </div>
    </div>
  );
}

export default Home;
