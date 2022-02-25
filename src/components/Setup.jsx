/** @format */
import "../components/CSS/Setup.css"
import React from "react";

function Setup() {
  return (
    <div className="setUpContent">
      <div>Set Up Your Account</div>
      <div className="tickBox">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="m4 12.258 5.818 5.818L20 5"
              class="icon_svg-stroke"
              stroke="#666"
              stroke-width="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div>Visit your feed</div>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <div>Follow 5 more Spaces</div>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <div>Upvote 5 more good pieces of content</div>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <div>Ask a question</div>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <div>Add 3 credentials about where you live, work or study</div>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <div>Answer a question</div>
      </div>
    </div>
  );
}

export default Setup;