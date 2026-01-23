import React from "react";
import "../styles/MainPage.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

import menuIcon from "../assets/menuIcon.png";
import logo from "../assets/logo.png"; 
import coinIcon from "../assets/coinIcon.png";


const MainPage = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();

  const navigate = useNavigate();

  return (
    <div className="App">

      <div className="Main_Window">

        <div className="mainHomePageContainer">

        <div className="headerContainer">
          <div className="headerLeft">
            <img className="menuIcon" src={menuIcon} />
            <img className="logo" src={logo} />
          </div>

          <div className="headerRight">
              <div className="bonusBlock">
                <img src={coinIcon} className="bonusIconLeft" />
                <span className="bonusText">x4</span>
                <img src={plusIcon} className="bonusIconRight" />
              </div>
            {/* <img className="avatar" src={avatar} /> */}
          </div>
        </div>

        </div> 
 






        {/* <div className="footerContainer">

          <div className="footerInner">
            <div className="footerNav">

              <div className="footerItem">
                <img src={lotteryIcon} />
                <span>Лотереи</span>
              </div>

              <div className="footerItem">
                <img src={upgradeIcon} />
                <span>Апгрейды</span>
              </div>

              <div className="footerItem active">
                <img src={casesIcon} alt="" />
                <span>Кейсы</span>

                <img
                  className="footerActiveAnim"
                  src="https://mycs2.pro/public/video/fire_orange.webp?v=3"
                  alt=""
                />
              </div>

              <div className="footerItem">
                <img src={friendsIcon} />
                <span>Друзья</span>
              </div>

              <div className="footerItem">
                <img src={jetGiftsIcon} />
                <span>Jet Gifts</span>
              </div>

            </div>
          </div>

        </div> */}

      </div>
    </div>
  );
};

export default MainPage;