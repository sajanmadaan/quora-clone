import React from 'react'
import "./CSS/Feed.css"
import QuoraBox from './QuoraBox'
import  {Post}  from './Post.jsx'
import {Showques} from "./show_ques.jsx"
import { Showpost } from './show_post'

function Feed() {
  return (
    <div className="feed">
      <QuoraBox />
      <Showques />
      <Showpost />
      <Post />
    </div>
  );
}

export default Feed