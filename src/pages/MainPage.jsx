import React, { useState } from "react";
import "../styles/MainPage.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";

import menuIcon from "../assets/menuIcon.png";
import logo from "../assets/logo.png"; 
import coinIcon from "../assets/coinIcon.png";
import swapIcon from "../assets/swapIcon.png";
import banerIMG from "../assets/banerIMG.png";
import categoriesIcon from "../assets/categoriesIcon.png";
import allItemsIcon from "../assets/allItemsIcon.png";    
import duckIMG from "../assets/duck.png";
import categoryBG from "../assets/category-bg.png";

const MainPage = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();
  const [avatarLoaded, setAvatarLoaded] = useState(false);

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
                  <img src={swapIcon} className="bonusIconRight" />
                </div>
              <div className="avatarHeaderContainer">
                {user?.photoUrl && (
                  <div
                    className={`avatarHeaderContainer ${
                      avatarLoaded ? "visible" : "hidden"
                    }`}
                  >
                    <img
                      src={user.photoUrl}
                      className="userAvatar"
                      onLoad={() => setAvatarLoaded(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sectionTitle">
            <span className="sectionLine" />
            <span className="sectionText">Полезная информация</span>
            <span className="sectionLine" />
          </div>

          <div className="bannerSection">
            <div className="bannerWrapper">
              <img
                src={banerIMG}
                alt="Banner"
                className="bannerImage"
              />
            </div>

            <div className="bannerPagination">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>

          <div className="sectionTitle">
            <span className="sectionLine" />
            <span className="sectionText">Наш каталог</span>
            <span className="sectionLine" />
          </div>

          <div className="catalogButtons">
            <button className="catalogButton">
              <img src={categoriesIcon} />
              <span>Категории</span>
            </button>

            <button className="catalogButton primary">
              <img src={allItemsIcon} />
              <span>Все товары</span>
            </button>
          </div>

          <div className="categoryCard">
            {/* 1 слой — фон */}
            <div className="cardBg" />

            {/* 2 слой — фон-картинка */}
            <img
              src={categoryBG}
              className="cardImageFull"
              alt=""
            />

            {/* 3 слой — персонаж */}
            <img
              src={duckIMG}
              className="cardImageLeft"
              alt=""
            />

            {/* 4 слой — затемнение */}
            <div className="cardOverlay" />

            {/* 5 слой — контент */}
            <div className="cardContent">
              <div className="newDropBadge">NEW DROP</div>
              <div className="cardTitle">ЖИДКОСТИ</div>
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