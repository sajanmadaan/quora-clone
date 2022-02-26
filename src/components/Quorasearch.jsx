import { useState , useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./CSS/Post.css";
import Navbar from './Navbar';

import { Avatar } from "@material-ui/core";


export const Quorasearch = () => {
    
   const [data,setData] = useSearchParams();
    let a = data.get("q");
    const [can,setCan] = useState(true);
    const [texta,setTexta] = useState([]);
    useEffect(() => {
      if(can){
      fetch(`https://quora-clone-api-masai.herokuapp.com/post?q=${a}`)
        .then((res) => res.json())
        .then((texta) => setTexta(texta.slice(0,5)));
      }
        return () => setCan(false); 
  }, []);


  console.log(texta)
    return (
      <div>
        <Navbar />
        <div>
    {texta.map((e, index) => (
     
    <div className="post">
      <div className='Avtaaruser'>
        <div>
       <Avatar /></div>
       <div> <h5> {e.user_id.first_name}</h5>
        <p>{e.user_id.title}</p></div>
        </div>
      <div className="post_inf">

      <div className="post_body">
        <div className="post_que">
        <h3>{e.post_que}</h3>
        </div>
      </div>
      </div>
      
 
       
  </div>))};
  </div>
    
      </div>
    )};
    