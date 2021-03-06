/** @format */

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Navbar.css";
import { BasicModal } from "./popup.jsx";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="qhead">
      <div className="qlogo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />

        {/* <span class="CssComponent__CssInlineComponent-sc-1oskqb9-1 Logo___StyledCssInlineComponent-sc-1pxybtk-0 diriSt">
          <svg width="202px" height="115px" viewBox="0 0 202 115">
            <g
              stroke="none"
              fill="#B92B27"
              fill-rule="evenodd"
              class="logo_fill"
            >
              <path
                d="M24.4,31.9 C37.1,31.9 49.1,41.8 49.1,56.2 C49.1,64.3 45.3,70.9 39.9,75.3 C41.5,77.9 43.5,79.7 45.9,79.7 C48.7,79.7 49.9,77.5 50.1,75.7 L50.1,75.7 L53.7,75.7 C53.9,78.1 52.7,87.3 42.7,87.3 C36.5,87.3 33.3,83.7 30.9,79.7 C28.9,80.1 26.7,80.5 24.5,80.5 C12.2,80.5 0,70.6 0,56.2 C0,41.8 12.2,31.9 24.4,31.9 Z M114.1,42.8 C124.3,42.8 132.5,50 132.6,60.7 C132.6,72 124.3,79.4 114.1,79.4 C104.2,79.4 95.6,71.9 95.6,60.7 C95.6,49.8 104.1,42.8 114.1,42.8 Z M181.4,42.8 C190.4,42.8 196,45.2 196,54.2 L196,54.2 L196,69.6 C196,72 196.8,73.2 198.8,73.2 C199.8,73.2 200.6,72.8 201,72.6 L201,72.6 L201.9,74.4 C201.1,75.8 198.5,78.4 193.7,78.4 C189.5,78.4 186.9,76.4 186.5,73.2 L186.5,73.2 L186.3,73.2 C184.3,76.8 180.7,79.2 175.5,79.2 C169.3,79.2 165.5,76 165.5,70.2 C165.5,58.8 181.4,62 186,54.4 L186,54.4 L186,52.6 C186,47.2 183.8,46 181.4,46 C174.2,46 177.4,54.4 171,54.4 C167.8,54.4 166.6,52.6 166.6,50.4 C166.6,46.2 171.8,42.8 181.4,42.8 Z M67.6,43.6 L67.6,67 C67.6,71.4 69.8,73.4 73,73.4 C75.6,73.4 78.4,72.2 79.8,69.4 L79.8,50 C79.8,48 79.2,47.2 77,47.2 L74.6,47.2 L74.6,43.6 L89.8,43.6 L89.8,69.3 C89.8,71.7 90.6,72.9 93.4,72.9 L93.8,72.9 L93.8,76.7 L80.2,78.9 L80.2,73.8 L80,73.8 C77.4,77.1 73.6,79.1 68.6,79.1 C62.4,79.1 57.8,75.9 57.8,67.3 L57.8,50 C57.8,48 57,47.2 54.8,47.2 L52.6,47.2 L52.6,43.6 L67.6,43.6 Z M157.9,43 C161.1,43 163.7,44.8 163.7,48.4 C163.7,51 162.5,53.6 158.9,53.6 C155.9,53.6 155.3,50.8 152.7,50.8 C150.5,50.8 148.7,53 148.7,56.2 L148.7,70.4 C148.7,73.6 149.5,74.6 153.1,74.6 L155.1,74.6 L155.1,78.4 L133.5,78.4 L133.5,74.7 L134.9,74.7 C138.5,74.7 138.9,73.7 138.9,70.5 L138.9,50 C138.9,48 137.9,47.2 135.7,47.2 L133.7,47.2 L133.7,43.6 L147.5,43.6 L148.1,50.8 L148.5,50.8 C149.9,45.6 154.1,43 157.9,43 Z M24.5,35.8 C15.3,35.8 11.3,42.7 11.3,56.1 C11.3,69.5 15.3,76.4 24.5,76.4 C26.2,76.4 27.7,76 28.9,75.6 C27.1,71.4 24.7,67.4 20.1,67.4 C19.3,67.4 18.5,67.6 17.7,68 L17.7,68 L16.3,65.2 C18.3,63.5 21,62.2 24.7,62.2 C30.5,62.2 33.5,65 35.9,68.6 C37.3,65.6 37.9,61.4 37.9,56.1 C37.9,42.7 33.9,35.8 24.5,35.8 Z M114.1,46.2 C109.3,46.2 106.5,51 106.5,60.6 C106.5,70.4 109.3,75.4 114.1,75.4 C119.3,75.4 121.3,70.4 121.5,60.6 C121.7,51.1 119.3,46.2 114.1,46.2 Z M185.9,58.6 C182.7,62.1 175.3,62.6 175.3,69 C175.3,72.2 177.3,74 179.9,74 C184.3,74 185.9,70.2 185.9,66 L185.9,66 Z"
                fill="#B92B27"
              ></path>
            </g>
          </svg>
        </span> */}
      </div>

      <div className="qicons">
        <Link to="/">
          {" "}
          <div className="q_icon">
            {/* <span class="CssComponent__CssInlineComponent-sc-1oskqb9-1 Icon___StyledCssInlineComponent-sc-11tmcw7-0 iWPcnl"> */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              // xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 17.5a2.5 2.5 0 1 0-5 0v5a.625.625 0 0 1-.533.618l-.092.007H4.5a.625.625 0 0 1-.618-.533l-.007-.092v-9.375H.75a.625.625 0 0 1-.505-.995l.063-.072L11.558.808a.625.625 0 0 1 .797-.072l.087.072 11.25 11.25c.37.37.145.989-.347 1.06l-.095.007h-3.125V22.5a.625.625 0 0 1-.533.618l-.092.007h-4.375a.625.625 0 0 1-.625-.625v-5Z"
                className="icon_svg-fill_as_stroke"
                fill="#B92B27"
              ></path>
            </svg>
            {/* </span> */}
          </div>
          <div className="flo">Home</div>
        </Link>

        <Link to="/following">
          <div className="q_icon">
            {/* <FeaturedPlayListOutlinedIcon/> */}
            <svg width="28" height="28" viewBox="0 0 24 24">
              <g
                class="icon_svg-fill_as_stroke"
                fill="#636466"
                fill-rule="nonzero"
              >
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M6.71,8.288c-1.244,0-2.255-1.012-2.255-2.255S5.467,3.777,6.71,3.777s2.255,1.012,2.255,2.255     S7.954,8.288,6.71,8.288z M6.71,4.978c-0.582,0-1.055,0.473-1.055,1.055S6.128,7.088,6.71,7.088s1.055-0.473,1.055-1.055     S7.292,4.978,6.71,4.978z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M20.269,23.073H3.731c-1.547,0-2.805-1.258-2.805-2.805V3.731c0-1.547,1.258-2.805,2.805-2.805h16.537     c1.547,0,2.805,1.258,2.805,2.805v16.537C23.073,21.815,21.815,23.073,20.269,23.073z M3.731,2.126     c-0.885,0-1.605,0.72-1.605,1.605v16.537c0,0.885,0.72,1.605,1.605,1.605h16.537c0.885,0,1.605-0.721,1.605-1.605V3.731     c0-0.885-0.721-1.605-1.605-1.605H3.731z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M19.456,6.364h-7.204c-0.332,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6h7.204c0.331,0,0.6,0.269,0.6,0.6     S19.787,6.364,19.456,6.364z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M19.456,14.892h-7.204c-0.332,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6h7.204c0.331,0,0.6,0.269,0.6,0.6     S19.787,14.892,19.456,14.892z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M19.456,19.155h-7.204c-0.332,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6h7.204c0.331,0,0.6,0.269,0.6,0.6     S19.787,19.155,19.456,19.155z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M19.456,10.628h-7.204c-0.332,0-0.6-0.269-0.6-0.6s0.269-0.6,0.6-0.6h7.204c0.331,0,0.6,0.269,0.6,0.6     S19.787,10.628,19.456,10.628z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M8.495,13.799h-3.57c-0.214,0-0.413-0.114-0.52-0.3c-0.107-0.186-0.107-0.414,0-0.6l1.785-3.091     c0.214-0.372,0.825-0.372,1.039,0l1.785,3.091c0.107,0.186,0.107,0.414,0,0.6C8.908,13.685,8.709,13.799,8.495,13.799z      M5.965,12.599h1.491L6.71,11.308L5.965,12.599z"
                    fill="#636466"
                  ></path>
                </g>
                <g fill="#636466">
                  <path
                    class="st0"
                    d="M8.885,19.949h-4.35v-4.349h4.35V19.949z M5.735,18.75h1.95V16.8h-1.95V18.75z"
                    fill="#636466"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="flo">following</div>
        </Link>

        <Link to="/answers">
          <div className="q_icon">
            {/* <AssignmentTurnedInOutlinedIcon/> */}
            {/* <span class="CssComponent__CssInlineComponent-sc-1oskqb9-1 Icon___StyledCssInlineComponent-sc-11tmcw7-0 eLItvt"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                class="icon_svg-fill_as_stroke"
                d="M20.582 1.469a2.757 2.757 0 0 1 1.369 4.468l-.134.143L7.594 20.299a.615.615 0 0 1-.129.099l-.073.036-1.238.514.006.006-.1.033-3.82 1.59a.615.615 0 0 1-.662-.116l-.058.019.019-.058a.615.615 0 0 1-.147-.569l.031-.093 1.592-3.831.031-.089.005.005.515-1.237a.637.637 0 0 1 .081-.141l.054-.061L17.92 2.182a2.756 2.756 0 0 1 2.662-.713zm.918 8.406c.314 0 .574.231.618.533l.007.092v11a.624.624 0 0 1-.533.618l-.092.007h-11a.625.625 0 0 1-.092-1.243l.092-.007h10.375V10.5c0-.314.231-.574.533-.618l.092-.007zm-2.577-6.916-.119.107L4.673 17.201l-.666 1.6 1.19 1.19 1.601-.665 14.136-14.13c.304-.304.46-.72.439-1.14l-.016-.158-.033-.157a1.504 1.504 0 0 0-2.4-.782zM13.5 1.875a.625.625 0 0 1 .092 1.243l-.092.007H3.124L3.125 13.5a.624.624 0 0 1-.533.618l-.092.007a.624.624 0 0 1-.618-.533l-.007-.092v-11c0-.314.231-.574.533-.618l.092-.007h11z"
                fill="#636466"
              ></path>
            </svg>
            {/* </span> */}
          </div>
          <div className="flo">Answer</div>
        </Link>

        <Link to="/spaces">
          <div className="q_icon">
            {/* <PeopleAltOutlinedIcon />   */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                class="icon_svg-fill_as_stroke"
                d="M12 11.375c2.276 0 4.125 1.823 4.125 4.076V22.5c0 .345-.28.625-.625.625h-7a.625.625 0 0 1-.625-.625v-7.049c0-2.253 1.849-4.076 4.125-4.076zm-7-2c1.376 0 2.638.671 3.403 1.771a.625.625 0 1 1-1.027.713A2.884 2.884 0 0 0 5 10.624c-1.533 0-2.783 1.178-2.87 2.66l-.005.166-.001 8.424h4.127c.314 0 .574.231.618.533l.007.092a.624.624 0 0 1-.533.618l-.092.007H1.5a.624.624 0 0 1-.618-.533L.875 22.5v-9.049c0-2.253 1.849-4.076 4.125-4.076zm14.001 0c2.276 0 4.125 1.823 4.125 4.076V22.5l-.007.092a.626.626 0 0 1-.618.533H17.75l-.092-.007a.626.626 0 0 1-.533-.618l.007-.092a.626.626 0 0 1 .618-.533h4.126v-8.424l-.005-.166c-.087-1.482-1.337-2.66-2.87-2.66-.963 0-1.844.468-2.377 1.235a.625.625 0 1 1-1.027-.713A4.133 4.133 0 0 1 19 9.375zM12 12.625c-1.59 0-2.875 1.267-2.875 2.826v6.424h5.75v-6.424c0-1.503-1.195-2.735-2.706-2.821zm0-10a3.86 3.86 0 0 1 2.641 1.039c.743.652 1.234 1.541 1.234 2.461v.625A3.89 3.89 0 0 1 12 10.375a3.875 3.875 0 0 1-3.867-3.624l-.008-.001v-.625c0-.919.491-1.809 1.234-2.461A3.861 3.861 0 0 1 12 2.625zm2.613 4.126H9.387a2.625 2.625 0 0 0 5.226 0zM19.192.625h.158l.082.003.073.004.048.003.111.011.033.004-.144-.015a3.875 3.875 0 0 1 3.432 2.831 3.87 3.87 0 0 1 .135 1.237l-.002 2.176.022.188.025.152.012.06.059.012c.376.096.655.549.392.947l-.056.074a2.34 2.34 0 0 1-.429.381c-.848.596-1.86.578-2.695-.443l-.042-.053a3.87 3.87 0 0 1-3.362-.512.625.625 0 1 1 .712-1.028 2.626 2.626 0 0 0 2.672.188c.639-.453.834-1.328.415-2.046-.049-.097-.196-.263-.419-.458a7.85 7.85 0 0 0-.569-.448l-.819-.549-.042-.027-1.875 1.237a.625.625 0 0 1-.839-.14l-.053-.082-.452-.823a.63.63 0 0 1-.108-.321v-.02a.627.627 0 0 1 .056-.282A3.875 3.875 0 0 1 18.355.729l.042-.009.151-.032.03-.005.353-.046.06-.004.147-.007zm-14.505 0h.093l.103.002.086.004.118.008.104.01.072.009.123.019.082.014.07.014.314.079.042.013a3.85 3.85 0 0 1 .666.275c.148.079.292.167.429.264a3.86 3.86 0 0 1 .649.578l.113.132c.102.125.195.254.28.39l.057.094.005.009a3.89 3.89 0 0 1 .186.359.667.667 0 0 1 .048.158c.05.216.042.44-.018.634-.134.503-.531.948-1.088.948-.372 0-.678-.203-1.034-.56l-.354-.392-.158-.198-.309.253c-.297.23-.612.446-.949.649l-.344.198a6.762 6.762 0 0 1-1.882.491 2.62 2.62 0 0 0 1.04 1.56 2.626 2.626 0 0 0 3.014.018.625.625 0 1 1 .712 1.028 3.876 3.876 0 0 1-6.071-3.48 3.86 3.86 0 0 1 .248-1.099l.026-.064.047-.112.04-.087.023-.049.036-.072.025-.048.057-.103.03-.052.064-.104.048-.074.062-.09.054-.074.056-.073.07-.087.054-.063.063-.071.068-.072.069-.07.069-.066.063-.058.097-.084.047-.039.086-.068.074-.056.091-.065.066-.044.099-.063.063-.038.103-.059.072-.038.087-.044.095-.045.089-.039.094-.039.072-.028.116-.041.062-.02.151-.045.2-.049-.189.046.18-.044.027-.006.152-.029.082-.013.113-.015.067-.007.09-.008.058-.004L4.55.63l.096-.004z"
                fill="#636466"
              ></path>
            </svg>
          </div>
          <div className="flo">Spaces</div>
        </Link>

        <Link to="/notification">
          <div className="q_icon">
            {/* <NotificationsOutlinedIcon /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                class="icon_svg-fill_as_stroke"
                d="M7.526 20.785H2.79a.625.625 0 0 1-.625-.625v-2.87c0-.283.19-.53.463-.604a3.359 3.359 0 0 0 2.093-1.655c.207-.456.349-1.126.426-1.944a18.81 18.81 0 0 0 .044-2.578l-.025-.44a6.84 6.84 0 0 1 4.402-6.386 2.54 2.54 0 0 1 4.133-2.658 2.54 2.54 0 0 1 .692 2.678 6.866 6.866 0 0 1 4.346 6.415l-.022.381a19.11 19.11 0 0 0 .046 2.585c.076.811.214 1.476.415 1.932a3.376 3.376 0 0 0 2.079 1.657.625.625 0 0 1 .459.603v2.885c0 .345-.28.625-.625.625h-4.616a4.93 4.93 0 0 1-8.948 0zm1.432 0a3.68 3.68 0 0 0 6.084 0H8.958zm-1.155-1.25a.62.62 0 0 1 .273 0h7.847a.62.62 0 0 1 .273 0h4.269v-1.81a4.62 4.62 0 0 1-2.402-2.143l-.018-.037c-.272-.605-.439-1.399-.527-2.346a20.211 20.211 0 0 1-.05-2.758l.022-.371a5.594 5.594 0 0 0-4.219-5.418A6.03 6.03 0 0 0 12 4.485h-.089a6.048 6.048 0 0 0-1.291.186.713.713 0 0 1-.12.019c-2.358.657-4.083 2.813-4.087 5.331l.026.43c.042.89.037 1.847-.048 2.754-.089.945-.257 1.738-.548 2.377a4.623 4.623 0 0 1-2.428 2.161v1.793h4.389zm2.969-16.189a6.907 6.907 0 0 1 1.104-.111h.133c.402.006.796.048 1.178.121a1.29 1.29 0 0 0-2.078-1.409 1.29 1.29 0 0 0-.337 1.4z"
                fill="#636466"
              ></path>
            </svg>
          </div>
          <div className="flow">Notifications</div>
        </Link>

        <div className="input_icon">
          {/* <NotificationsOutlinedIcon /> */}
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Quora"
            onKeyPress={function handlePress(e) {
              if (e.key === "Enter") {
                navigate(`/search?q=${e.target.value}`);
              }
            }}
          />
        </div>
        <button className="btn1">Try Quora +</button>
        <div className="rem_icon">
          <div className="q_avtar">
            <Avatar />
          </div>
          <LanguageIcon />

          <div className="btn">
            <BasicModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
