import React from 'react'
import "./CSS/Feed.css"
import QuoraBox from './QuoraBox'
import  {Post}  from './Post.jsx'
import {Showques} from "./show_ques.jsx"

function Feed() {
  return (
    <div className="feed">
      <QuoraBox />
      <Showques />
      <Post />
    </div>
  );
}

export default Feed