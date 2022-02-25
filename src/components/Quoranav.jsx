import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from "./Widget";
import "./CSS/Quoranav.css"
import { Message } from './message';





function Quoranav() {
  return (
    <div className='quora'>
      <Navbar/>
      <div className='quora_con'>
        <Sidebar />
        <Feed />
        <Widget />
        <Message/>
      </div>
    </div>
  )
}

export default Quoranav