import React from 'react'
import "./CSS/Sidebarop.css"
import { Add } from "@material-ui/icons";

function Sidebarop() {
  return (
    <div className="sidebar_option">
      <div className="sidebarOP">
        <Add />
        <p className="text">Create Spaces</p>
      </div>
      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science</p>
      </div>

      {/* //Bussiness */}

      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1026-100-ohvgqriqzmtjrnillbxqoyfstjxhmlcu.jpeg"
          alt=""
        />

        <p>Food</p>
      </div>

      {/* //psy */}

      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Health</p>
      </div>

      {/* //cooking */}

      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p>Movies</p>
      </div>

      {/* //Music */}

      {/* <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Music</p>
      </div>

      {/* //Science */}
      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science</p>
      </div> 

      {/* //Heaith */}

      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Health</p>
      </div>

      {/* //Tech */}
      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p>Technology</p>
      </div>

      {/* //Education */}

      
      <div className="sidebarOP">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Tweets</p>
      </div>

      <div className="sidebarOP">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
      {/* div part */}

      <hr className="line"></hr>
      <div className="Last_div">
        <h6> About.</h6>
        <h6>Careers.</h6>
        <h6>Terms.</h6>
        <h6>Privacy.</h6>
        <h6>Acceptable Use.</h6>
        <h6>Businesses.</h6>
        <h6>Press.</h6>
        <h6>Your Ad Choices</h6>
      </div>
    </div>
  );
}

export default Sidebarop