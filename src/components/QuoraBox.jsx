import React from 'react'
import "./CSS/QuoraBox.css"
import { Avatar } from "@material-ui/core";

function QuoraBox() {
  return (
      <div className='quoraBox'>
          <div className='quoraBox_inf'>
            <div className="quoraAvtaar">
              <Avatar /></div>
              <p>Username</p>
          </div>
          <div className='quoraBox_quora'>
              <h5>What is your question or link?</h5>
              
          </div>
    </div>
  )
}

export default QuoraBox