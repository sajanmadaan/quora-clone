import React from 'react'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

import "./CSS/Quoranav.css"
import { Widgetfollowing } from './Widget_following';

export const Following = () =>  {
    return (
        <div className='quora'>
      <Navbar/>
      <div className='quora_con'>
        <Sidebar />
   
        <Widgetfollowing/>
      </div>
    </div>
    )
}