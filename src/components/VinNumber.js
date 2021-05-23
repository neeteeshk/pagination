import React from 'react';
import './vin.css';
export const VinNumber = () =>{
    return (
        <div className="VinNumber">  
           <input type="text" placeholder="Enter VIN Number" id = "input_vin"></input>
           <button type="submit" id="button_vin">
           Search
           </button>
         </div>
    )
}