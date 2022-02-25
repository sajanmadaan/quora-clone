import React from 'react'
import "./CSS/Feed.css"
import QuoraBox from './QuoraBox'
import  {Post}  from './Post.jsx'

function Feed() {
  return (
    <div className="feed">
      <QuoraBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed