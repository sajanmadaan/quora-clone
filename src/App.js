import React from "react";
import './App.css';
import { Route , Routes } from "react-router-dom";
import Quoranav from "./components/Quoranav";
import { Following } from "./components/following";
import { Spaces} from "./components/spaces";
import {Answers } from "./components/answers.jsx";
import {Notification} from "./components/notification";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Quoranav/>} />
      <Route path="/following" element={<Following/>} />
      <Route path="/answers" element={<Answers/>} />
      <Route path="/spaces" element={<Spaces/>} />
      <Route path="/notification" element={<Notification/>} />
      </Routes>
    </div>
  );
}

export default App;
