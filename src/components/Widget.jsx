import React from 'react'
import WidgetOpt from './WidgetOpt'
import './CSS/Widget.css'
import Setup from './Setup';


function Widget() {
  return (
    <div>
      <div>
        <Setup/>
      </div>
      <div>
        <div className="widget">
          <div className="widget_header">
            <h5>Spaces to follow</h5>
          </div>
          <WidgetOpt />
        </div>
      </div>
    </div>
  );
}

export default Widget