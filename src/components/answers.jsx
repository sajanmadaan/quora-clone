import React from 'react';
import "./CSS/answers.css";
import { useEffect, useState } from "react";
import Navbar from './Navbar';

export const Answers = () =>  {

    const [text,setText] = useState([]);
    const [can,setCan] = useState(true);
      useEffect(() => {
        if(can){
        fetch(`https://quora-clone-api-masai.herokuapp.com/question`)
          .then((res) => res.json())
          .then((text) => setText(text.slice(0,3)));
        }
          return () => setCan(false); 
    }, []);

  return(
    <div>
    <Navbar />
    <div>
      <p id="question_for"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16.618-4.944 2.599L8 13.71 4 9.812l5.528-.803L12 4l2.472 5.01L20 9.811l-4 3.9.944 5.505z" class="icon_svg-stroke icon_svg-fill" stroke="#666" stroke-width="1.5" fill="none" stroke-linejoin="round"></path></svg>Questions For You</p>
    {text.map((e) => (
    <div className="widget__contents1">
      
      <div className="widget__content1">
       
        <div className="widget__contentTitle1">
          <h5>{e.ques_dec}</h5>
          <p>3 answers · Last followed 4m</p>
          <div className='ansfolpass'>
            
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="blue" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg><p>Answers</p>
            </div>
            
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg><p>Follow</p>
            </div>
            
            
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path><path class="icon_svg-fill_as_stroke" fill="#666" d="m4.429 19.571 2.652-.884-1.768-1.768z"></path><path d="M14.5 19.5h5v-5m-10-10h-5v5" class="icon_svg-stroke" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path></g></svg><p>Pass</p>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            </div>
        </div>
        
      </div>
             
    </div>

    ))};
    </div>
 </div>

    )
}

