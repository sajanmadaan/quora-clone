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
import { useSelector, useDispatch } from "react-redux";
import { likePost, unlikePost} from "../redux/post_redux/action.js";
import { style } from '@mui/system';

export const Post = () =>  {


  const [text,setText] = useState([]);
  const [can,setCan] = useState(true);
    useEffect(() => {
      if(can){
      fetch(`https://quora-clone-api-masai.herokuapp.com/post`)
      .then((res) => res.json())
      .then((text) =>setText(text));
      }
      return () => setCan(false); 
  }, []);

  const count = useSelector((store) => store.Postreducer.count);
  const dispatch = useDispatch();


  return (
    <div>
      {text.map((e, index) => (
        <div className="post">
          <div className="Avtaaruser">
            <div>
              <Avatar />
            </div>
            <div>
              <h5>
                {e.user_id.first_name} &nbsp; <Link to="#"> Follow</Link>
              </h5>
              <p>{e.user_id.title}</p>
            </div>
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
          <ArrowUpwardOutlinedIcon  onClick={() => {
          dispatch(likePost(1,index));
        }}/>{e.answer_id.votes + count} &nbsp;
          <ArrowDownwardOutlinedIcon  onClick ={() => {
          dispatch(unlikePost(1));
        }}/>
        </div>
        <div className="post_footerAction2">
          <RepeatOutlinedIcon /> &nbsp; {e.answer_id.share}
          <ChatBubbleOutlineOutlinedIcon/> &nbsp;{e.answer_id.votes}
        </div>
        
        
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>


      </div>
      
    
        <div className='Avtaaruse'>
          <div className='Avtaarus'>
            <Avatar />
            <input type="text" placeholder='Add a Comment ............' />
          </div>
          <div className='Avtaaru'>
          <button >Add Comment</button>
          </div>

        </div>
      
        <div className='Avaaruse'>
          <div>
         <Avatar /> </div>
         <div>
         <h5>A{e.user_id.first_name} D'souza </h5>
         
         <p>{e.answer_id.ans_dec}</p>
        </div>
        
        </div>
        <div className='tvaaruse'>
          <div>
         <Avatar /> </div>
         <div>
         <h5>L{e.user_id.first_name} Black </h5>
         
         <p>Main thing is to {e.answer_id.ans_dec}</p>
        </div>
        
        </div>
  </div>))};
  </div>
)};


