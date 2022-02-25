import React from 'react';
import './CSS/Spaces.css';
import Navbar from './Navbar'

export const Spaces = () =>  {
  return (
      <div className='spaces'>
      <Navbar/>
      <div id="contain_spaces">
          <div id="first_box">
                <h3>Welcome to Spaces!</h3>
                <p>Follow Spaces to explore your interests on Quora.</p>
                <button className='create_space'><svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="blue" stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M12 7v10m-5-5h10" stroke-linecap="round"></path><circle cx="12" cy="12" r="9"></circle></g></svg> &nbsp; Create a Space</button> 
                <button className='create_space'><svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="icon_svg-stroke" stroke="blue" stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M12 7v10m-5-5h10" stroke-linecap="round"></path><circle cx="12" cy="12" r="9"></circle></g></svg> &nbsp; Discove Spaces</button>
           </div>
        <h2 className="d_Spaces">Discover Spaces</h2>
        <h4 className="d_Spaces">Spaces you might like</h4>
        <div className='d_grid'>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_yellow.png-26-0cad087b263ce130.png" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
        </div>

        <h2 className="d_Spaces">Discover Spaces</h2>
        <h4 className="d_Spaces">Spaces you might like</h4>
        <div className='d_grid'>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_yellow.png-26-0cad087b263ce130.png" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
        </div>

        <h2 className="d_Spaces">Discover Spaces</h2>
        <h4 className="d_Spaces">Spaces you might like</h4>
        <div className='d_grid'>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_banner_yellow.png-26-0cad087b263ce130.png" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
            <div className="d_Spaces_div"><img className="d_Spaces_img" src="https://qphs.fs.quoracdn.net/main-custom-tc-1578736-320x64-mptztjeiytbatvwmvovefxdwjiqlfvgu.jpeg" alt="" /><h5>General knowledge</h5><p>A space which enables our knowledge.</p></div>
        </div>
      </div>
    </div>
  )
}
