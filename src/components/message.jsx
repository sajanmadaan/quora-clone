/** @format */

import { useRef, useState } from "react";
import "./CSS/message.css";
export const Message = () => {
  const [isShow, setIsShow] = useState(false);
  const icon = useRef();
  const messageBox = useRef();
  const handleSwitch = () => {
    if (!isShow) {
      icon.current.style.transform = "rotate(-180deg)";
      messageBox.current.style.transform = "translateY(415px)";
    } else {
      icon.current.style.transform = "rotate(0deg)";
      messageBox.current.style.transform = "translateY(0px)";
    }
    setIsShow((prev) => !prev);
  };
  return (
    <div className="messageBox" ref={messageBox}>
      <div className="bar">
        <div>Messages</div>
        <div>
          <div>
            <img src="./assets/messageBox.svg" alt="" />
          </div>
          <div onClick={handleSwitch} ref={icon}>
            <img src="./assets/dropdown.svg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="content">
          <div>
            <img
              src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
              alt=""
            />
          </div>
          <div>No messages</div>
          <div>
            Connect with others on Quora by beginning a new conversation
          </div>
          <div>
            <button>
              <div>
                <img src="./assets/messageBox2.svg" alt="" />
              </div>
              <div>New message</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
