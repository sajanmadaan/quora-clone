import React from 'react'
import Login from './Login'
import Reg from './Reg'
export default function Lrpage(){
    return(
        <div>
            <div style={{display: 'flex', flexDirection:'column',textAlign:'center',paddingTop:"70px"}}>
                <h1 style={{color:"Red",fontSize:"40px"}}>Quora</h1>
                <p>A place to share knowledge and better understand the world</p>
            </div>
        <div style={{display: 'flex', flexDirection:"row",marginTop:'30px',marginLeft:'200px'}}>
            
            <div><Reg/></div>
            <div style={{display:'flex',flexDirection:"column",fontSize:"50vh"}}>
            <div>|</div>
            
            
            </div>
            <div><Login/></div>
        </div>
        </div>
    )

}