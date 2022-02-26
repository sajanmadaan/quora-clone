import React from 'react'
import "./CSS/QuoraBox.css"
import { Avatar } from "@material-ui/core";
import {BasicModal} from "./popup.jsx";
function QuoraBox() {
  return (
      <div className="btn2" >
          <div className='quoraBox_inf'>
              < Avatar />
              <h5>Username</h5>
          </div>   
          <div className='quoraBox_quora'>
              <h5 >What is your question or link? <BasicModal /></h5>
  
          </div>
    </div>
  )
}

export default QuoraBox