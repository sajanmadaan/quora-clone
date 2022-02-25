import React from 'react'
import WidgetOptfollowing from './WidgetOpt_following'
import './CSS/Widget_following.css'


export const  Widgetfollowing = () =>{
  return (
      <div className='widget12'>
        
          <div className='widget_header'>
            <h2>Discover Spaces</h2>
              <h4>Spaces you might like</h4>
          </div>
         <WidgetOptfollowing/>
    </div>
  )
}
