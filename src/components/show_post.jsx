import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import "./CSS/showques.css"
export const Showpost = () => {
const data = useSelector( (store) => store.Postreducer.post);
    return (
      <div>
                 {data.map((e, index) => (
 
        <div className="postBox">
 
             <div className="Avtaarus">
                <div> <Avatar /></div>
                <div>
                <h5> username
                </h5>
                </div>
              </div>
            
           
              <div >

                <h2>{e.post_dec}</h2>
                <img src={e.image_url}  alt="" />
              </div>
                <div className="post_footer">
                  <div className="post_footerAction">
                    <ArrowUpwardOutlinedIcon/> &nbsp;
                    <ArrowDownwardOutlinedIcon />
                  </div>
                  <div className="post_footerAction2">
                    <RepeatOutlinedIcon /> &nbsp; 
                    <ChatBubbleOutlineOutlinedIcon/> &nbsp;
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
        </div>
        ))   };
        
    </div>
                 )};

