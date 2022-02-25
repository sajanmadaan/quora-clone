import React from 'react'
import "./CSS/Post.css"
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Post = () =>  {

  const [text,setText] = useState([]);
    useEffect(() => {
    getData();
    function getData() {
      fetch(`https://quora-clone-api-masai.herokuapp.com/post`)
        .then((res) => res.json())
        .then((text) => setText(text));
    }
  }, []);



  return (
    <div>
    {text.map((e, index) => (
    <div className="post">
      <div className='Avtaaruser'>
        <div>
       <Avatar /></div>
       <div> <h5> {e.user_id.first_name}&nbsp; <Link to="#"> Follow</Link></h5>
        <p>{e.user_id.title}</p></div>
        </div>
      <div className="post_inf">

      <div className="post_body">
        <div className="post_que">
        <h3>{e.post_que}</h3>
        <p>{e.post_dec}</p>
        </div>
        <div className="post_answer">
        <img src={e.image} alt="" />
        </div>
      </div>
      </div>
      <div className="post_footer">
        <div className="post_footerAction">
          <ArrowUpwardOutlinedIcon /> 
          <ArrowDownwardOutlinedIcon />
        </div>
        <div className="post_footerAction2">
          <RepeatOutlinedIcon />
          <ChatBubbleOutlineOutlinedIcon />
 
        </div>
        
        
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      
 
       
  </div>))};
  </div>
)};


