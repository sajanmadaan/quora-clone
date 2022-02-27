import logo from './logo.svg';
// import './App.css';

import {BasicModal} from "./components/popup";
import {SimplePopper} from "./components/drop_popper";
import {Show_answer} from "./components/show_ans"

function App() {
  return (
    <div className="App">
    <SimplePopper/>
      <BasicModal/>
      <Show_answer/>
    </div>
  );
}

export default App;
