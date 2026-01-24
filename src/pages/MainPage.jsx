import React, { useState, useEffect} from "react";
import "../styles/MainPage.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { haptic } from "../utils/haptics";

import menuIcon from "../assets/menuIcon.png";
import logo from "../assets/logo.png"; 
import coinIcon from "../assets/coinIcon.png";
import swapIcon from "../assets/swapIcon.png";
import banerIMG from "../assets/banerIMG.png";
import baner2IMG from "../assets/banerIMG.png";
import baner3IMG from "../assets/banerIMG.png";
import categoriesIcon from "../assets/categoriesIcon.png";
import allItemsIcon from "../assets/allItemsIcon.png";    
import duckIMG from "../assets/duck.png";
import categoryBG from "../assets/category-bg.png"; 
import duck2IMG from "../assets/duck2.png";
import duck3IMG from "../assets/duck3.png";
import duck4IMG from "../assets/duck4.png";
import categoryBG2 from "../assets/categoryBG2.png";
import categoryBG3 from "../assets/categoryBG3.png";
import categoryBG4 from "../assets/categoryBG4.png";  
import telegramIcon from "../assets/telegramIcon.png";
import supportIcon from "../assets/supportIcon.png";


const MainPage = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="App">

      <div className="Main_Window">

        <div className="mainHomePageContainer">

          <div className={`headerContainer reveal delay-1 ${mounted ? "visible" : ""}`}>
            <div className="headerLeft">
              <img className="menuIcon" src={menuIcon} onClick={haptic.heavy} />
              <img className="logo" src={logo} />
            </div>

            <div className="headerRight">
                <div className="bonusBlock" onClick={haptic.heavy}>
                  <img src={coinIcon} className="bonusIconLeft" />
                  <span className="bonusText">x4</span>
                  <img src={swapIcon} className="bonusIconRight" />
                </div>
                <div className="avatarHeaderContainer">
                  {user?.photoUrl && (
                    <img
                      src={user.photoUrl}
                      className={`userAvatar ${avatarLoaded ? "visible" : "hidden"}`}
                      onLoad={() => setAvatarLoaded(true)}
                    />
                  )}
                </div>
            </div>
          </div>

          <div className="scrollContent">

          {/* <div className={`sectionTitle reveal delay-2 ${mounted ? "visible" : ""}`}>
            <span className="sectionLine" />
            <span className="sectionText">Полезная информация</span>
            <span className="sectionLine" />
          </div> */}

          <div className={`bannerSection reveal delay-3 ${mounted ? "visible" : ""}`}>
            <div className="bannerScroll">
              <div className="bannerSlide">
                <img src={banerIMG} className="bannerImage" />
              </div>

              <div className="bannerSlide">
                <img src={baner2IMG} className="bannerImage" />
              </div>

              <div className="bannerSlide">
                <img src={baner3IMG} className="bannerImage" />
              </div>
            </div>

            <div className="bannerPagination">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>

          <div className={`sectionTitle reveal delay-2 ${mounted ? "visible" : ""}`}>
            <span className="sectionLine" />
            <span className="sectionText">Наш каталог</span>
            <span className="sectionLine" />
          </div>

          <div className={`catalogButtons reveal delay-4 ${mounted ? "visible" : ""}`}>
            <button className="catalogButton" onClick={haptic.heavy}>
              <img src={categoriesIcon} />
              <span>Категории</span>
            </button>

            <button className="catalogButton primary" onClick={haptic.heavy}>
              <img src={allItemsIcon} />
              <span>Все товары</span>
            </button>
          </div>

          <div className={`categoriesGrid reveal delay-5 ${mounted ? "visible" : ""}`}>

            <div className="categoryCard" onClick={haptic.heavy}>
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

            <div className="categoryCard" onClick={haptic.heavy}>
              {/* 1 слой — фон */}
              <div className="cardBg" />

              {/* 2 слой — фон-картинка */}
              <img
                src={categoryBG2}
                className="cardImageFull"
                alt=""
              />

              {/* 3 слой — персонаж */}
              <img
                src={duck2IMG}
                className="cardImageRight"
                alt=""
              />

              {/* 5 слой — контент */}
              <div className="cardContent">
                <div className="cardTitle2">ОДНОРАЗКИ</div>
              </div>
            </div>

            <div className="categoryCard" onClick={haptic.heavy}>
              {/* 1 слой — фон */}
              <div className="cardBg" />

              {/* 2 слой — фон-картинка */}
              <img
                src={categoryBG3}
                className="cardImageFull"
                alt=""
              />

              {/* 3 слой — персонаж */}
              <img
                src={duck3IMG}
                className="cardImageLeft2"
                alt=""
              />

              {/* 5 слой — контент */}
              <div className="cardContent">
                <div className="cardTitle2">ПОДЫ</div>
              </div>
            </div>

            <div className="categoryCard" onClick={haptic.heavy}>
              {/* 1 слой — фон */}
              <div className="cardBg" />

              {/* 2 слой — фон-картинка */}
              <img
                src={categoryBG4}
                className="cardImageFull"
                alt=""
              />

              {/* 3 слой — персонаж */}
              <img
                src={duck4IMG}
                className="cardImageRight2"
                alt=""
              />

              {/* 4 слой — затемнение */}
              <div className="cardOverlay" />

              {/* 5 слой — контент */}
              <div className="cardContent">
                <div className="cardTitle">КАРТРИДЖИ</div>
              </div>
            </div>

          </div>

          <div className={`footerBar reveal delay-5 ${mounted ? "visible" : ""}`}>
            <div className="footerLeft">
              <span>ELF DUCK</span>
              <img src={telegramIcon} alt="" />
            </div>

            <div className="footerRight">
              <span>Поддержка 24/7</span>
              <img src={supportIcon} alt="" />
            </div>
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