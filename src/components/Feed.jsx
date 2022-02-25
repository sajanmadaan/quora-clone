import React from 'react'
import "./CSS/Feed.css"
import QuoraBox from './QuoraBox'
import  {Post}  from './Post.jsx'

function Feed() {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
    </div>
  );
}

export default Feed