import React from 'react';
import "./CSS/WidgetOp.css";
import { useEffect, useState } from "react";
import Navbar from './Navbar';

export const Answers = () =>  {

    const [text,setText] = useState([]);
    useEffect(() => {
    getData();
    function getData() {
      fetch(`https://quora-clone-api-masai.herokuapp.com/question`)
        .then((res) => res.json())
        .then((text) => setText(text));
    }
  }, []);

  return(
    <div>
    <Navbar />
    {text.map((e, index) => (
    <div className="widget__contents">
      
      <div className="widget__content">
       
        <div className="widget__contentTitle">
          <h5>{e.ques_dec}</h5>
        </div>
      </div>
             
    </div>

    ))};
 </div>

    )
}

