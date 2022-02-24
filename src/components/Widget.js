import React from 'react'
import WidgetOpt from './WidgetOpt'
import './CSS/Widget.css'


function Widget() {
  return (
      <div className='widget'>
          <div className='widget_header'>
              <h5>Spaces to follow</h5>
          </div>
         <WidgetOpt/>
    </div>
  )
}

export default Widget