import React from "react";
import "../styles/MainPage.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

import deposit from "../assets/deposit.png";
import key from "../assets/key.png";
import ton from "../assets/ton.png";
import ufcCaseIMG from "../assets/ufcCaseIMG.png";
import pinkCaseIMG from "../assets/pinkCaseIMG.png";
import friendsIcon from "../assets/friendsIcon.png";
import lotteryIcon from "../assets/lotteryIcon.png";
import jetGiftsIcon from "../assets/jetGiftsIcon.png";
import casesIcon from "../assets/casesIcon.png";
import upgradeIcon from "../assets/upgradeIcon.png";
import g63IMG from "../assets/g63IMG.png";
import championIMG from "../assets/championIMG.png";


const MainPage = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();

  const navigate = useNavigate();

  return (
    <div className="App">

      <div className="Main_Window">

        <div className="mainHomePageContainer">



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