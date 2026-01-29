import React, { useState, useEffect, useRef} from "react";
import "../styles/MainPage.css";
import { useUser } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { haptic } from "../utils/haptics";
import { preloadImage } from "../utils/preloadImage";

import menuIcon from "../assets/menuIcon.png";
import logo from "../assets/logo.png"; 
import coinIcon from "../assets/coinIcon.png";
import swapIcon from "../assets/swapIcon.png";
import banerIMG from "../assets/banerIMG.png";
import baner2IMG from "../assets/baner2IMG.png";
import baner3IMG from "../assets/baner3IMG.png";
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
import productsChaserBG from "../assets/productsChaserBG.png";
import chaserDuckIMG from "../assets/chaserDuck.png";
import backIcon from "../assets/backIcon.png";
import likedIcon from "../assets/likedIcon.png";
import buyIcon from "../assets/buyIcon.png";
import zlotyIcon from "../assets/zlotyIcon.png";
import chaserForPodsOrderModal from "../assets/chaserForPods-orderModal.png";
import solanaBG from "../assets/solanaBG.png";
import solanaDuckIMG from "../assets/solanaDuck.png";
import solanaOrderModal from "../assets/solanaOrderModal.png";




const MainPage = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [activeProduct, setActiveProduct] = useState(null);

  const PRODUCTS = [

    {
      id: 1,
      title1: "CHASER",
      title2: "FOR PODS 30 ML",
      titleModal: "CHASER FOR PODS 30 ML",
      price: 55,

      // картинки карточки
      cardBg: productsChaserBG,
      cardDuck: chaserDuckIMG,

      // картинка модалки
      orderIMG: chaserForPodsOrderModal,
    },

    {
      id: 2,
      title1: "SOLANA 30 ML",
      titleModal: "SOLANA 30 ML",
      price: 50,

      // картинки карточки
      cardBg: solanaBG,
      cardDuck: solanaDuckIMG,

      // картинка модалки
      orderIMG: solanaOrderModal,
    },

    {
      id: 3,
      title1: "CHASER SPECIAL 30 ML",
      titleModal: "CHASER SPECIAL 30 ML",
      price: 55,

      // картинки карточки
      cardBg: productsChaserBG,
      cardDuck: chaserDuckIMG,

      // картинка модалки
      orderIMG: chaserForPodsOrderModal,
    },

    {
      id: 4,
      title1: "VOZOL PRIME 30 ML",
      titleModal: "VOZOL PRIME 30 ML",
      price: 50,

      // картинки карточки
      cardBg: productsChaserBG,
      cardDuck: chaserDuckIMG,

      // картинка модалки
      orderIMG: chaserForPodsOrderModal,
    },
    // дальше другие товары
  ];

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  /* ================= BANNER DOTS SECTION ================= */

  const banners = [banerIMG, baner2IMG, baner3IMG]; // потом заменишь на реальные изображения
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  const bannerScrollRef = useRef(null);

  const rafScrollRef = useRef(0);

  const handleBannerScroll = () => {
    const container = bannerScrollRef.current;
    if (!container) return;

    if (rafScrollRef.current) return;
    rafScrollRef.current = requestAnimationFrame(() => {
      rafScrollRef.current = 0;

      const firstSlide = container.querySelector(".bannerSlide");
      if (!firstSlide) return;

      const slideWidth = firstSlide.offsetWidth;
      if (!slideWidth) return;

      // Read flex gap from CSS (fallback to 0 if not set)
      const styles = window.getComputedStyle(container);
      const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

      const step = slideWidth + gap;
      if (!step) return;

      const raw = container.scrollLeft / step;
      if (!Number.isFinite(raw)) return;

      let idx = Math.round(raw);
      // Clamp to valid range to avoid a transient "no active dot" state
      idx = Math.max(0, Math.min(banners.length - 1, idx));

      setActiveBannerIndex((prev) => (prev === idx ? prev : idx));
    });
  };

  const getDotCount = (n) => (n <= 3 ? n : 3);
  const getActiveDotIndex = (index, n) => {
    if (n <= 3) return index;
    if (index === 0) return 0;
    if (index === n - 1) return 2;
    return 1;
  };

  /* ================= CATALOG VIEW STATE ================= */

  const [catalogView, setCatalogView] = useState("categories");

  const [isSwitchingCatalog, setIsSwitchingCatalog] = useState(false);
  const [transitionDir, setTransitionDir] = useState("right");

  const switchCatalog = (view) => {
    if (view === catalogView) return;

    // direction-aware (премиум ощущение)
    setTransitionDir(view === "all" ? "left" : "right");

    setIsSwitchingCatalog(true);

    setTimeout(() => {
      setCatalogView(view);
      setIsSwitchingCatalog(false);
    }, 220); // должно совпадать с CSS
  };

  /* ================= NAVIGATION ================= */

  const navigate = useNavigate();

  /* ================= CREATE ORDER ================= */

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className={`App reveal delay-5 ${mounted ? "visible" : ""}`}>

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

          <div className={`bannerSection reveal delay-2 ${mounted ? "visible" : ""}`}>
            <div className="bannerScroll" ref={bannerScrollRef} onScroll={handleBannerScroll}>
              {banners.map((src, i) => (
                <div key={i} className="bannerSlide" onClick={haptic.heavy}>
                  <img src={src} alt={`Banner ${i + 1}`} className="bannerImage" />
                </div>
              ))}
            </div>

            <div className="bannerPagination">
              {Array.from({ length: getDotCount(banners.length) }).map((_, i) => {
                const activeDot = getActiveDotIndex(activeBannerIndex, banners.length);
                return <span key={i} className={`dot ${i === activeDot ? "active" : ""}`} />;
              })}
            </div>
          </div>

          <div className={`sectionTitle reveal delay-3 ${mounted ? "visible" : ""}`}>
            <span className="sectionLine" />
            <span className="sectionText">Наш каталог</span>
            <span className="sectionLine" />
          </div>

          <div className={`catalogButtons reveal delay-4 ${mounted ? "visible" : ""}`}>
            <button
              className={`catalogButton ${catalogView === "categories" ? "primary" : ""}`}
              onClick={() => {
                haptic.heavy();
                switchCatalog("categories");
              }}
            >
              <img src={categoriesIcon} />
              <span>Категории</span>
            </button>

            <button
              className={`catalogButton ${catalogView === "all" ? "primary" : ""}`}
              onClick={() => {
                haptic.heavy();
                switchCatalog("all");
              }}
            >
              <img src={allItemsIcon} />
              <span>Все товары</span>
            </button>
          </div>

          <div className={`catalogContent ${isSwitchingCatalog ? "fade-out" : "fade-in"} ${transitionDir}`}>
            {catalogView === "categories" && (
              <div key={catalogView} className="categoriesGrid catalogGridAnimated enter">

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
            )}

            {catalogView === "all" && (

              <div key={catalogView} className="categoriesGrid catalogGridAnimated enter">

                {PRODUCTS.map((product) => (
                  <div key={product.id} className="productCard">

                    {/* 1. фон */}
                    <div className="cardBg" />

                    {/* 2. фон-картинка */}
                    <img src={product.cardBg} className="cardImageFull" />

                    {/* 3. персонаж */}
                    <img src={product.cardDuck} className="productCardImageRight" alt="" />

                    {/* 4. контент сверху */}
                    <div className="productTop">
                      <div className="productTitle">{product.title1}<br/>{product.title2}</div>

                      <div className="priceBadge">
                        <span className="priceValue">{product.price}</span>
                        <img src={zlotyIcon} className="priceCoin" />
                      </div>
                    </div>

                    {/* 5. action-кнопки */}
                    <div className="productActionsRight">
                      <div className="actionBadge sale">NEW</div>

                      <button
                        className="actionButton cart pulse"
                        onPointerDown={() => {
                          preloadImage(product.orderIMG); // 👈 preload КАРТИНКИ МОДАЛКИ
                        }}
                        onClick={() => {
                          haptic.heavy();
                          setActiveProduct(product);
                          setIsCheckoutOpen(true);
                        }}
                      >
                        <img src={buyIcon} />
                      </button>

                      <button className="actionButton fav pulse">
                        <img src={likedIcon} />
                      </button>
                    </div>

                  </div>
                ))}

                {PRODUCTS.map((product) => (
                  <div key={product.id} className="productCard">

                    {/* 1. фон */}
                    <div className="cardBg" />

                    {/* 2. фон-картинка */}
                    <img src={product.cardBg} className="cardImageFull" />

                    {/* 3. персонаж */}
                    <img src={product.cardDuck} className="productCardImageLeft" alt="" />

                    {/* 4. контент сверху */}
                    <div className="productTop">
                      <div className="productTitle">{product.title1}</div>

                      <div className="priceBadge">
                        <span className="priceValue">{product.price}</span>
                        <img src={zlotyIcon} className="priceCoin" />
                      </div>
                    </div>

                    {/* 5. action-кноки */}
                    <div className="productActionsLeft">

                      <button
                        className="actionButton cart pulse"
                        onPointerDown={() => {
                          preloadImage(product.orderIMG); // 👈 preload КАРТИНКИ МОДАЛКИ
                        }}
                        onClick={() => {
                          haptic.heavy();
                          setActiveProduct(product);
                          setIsCheckoutOpen(true);
                        }}
                      >
                        <img src={buyIcon} />
                      </button>

                      <button className="actionButton fav pulse">
                        <img src={likedIcon} />
                      </button>
                    </div>

                  </div>
                ))}

              </div>

            )}
          </div>

          <div className={`footerBar reveal delay-6 ${mounted ? "visible" : ""}`}>
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

          {isCheckoutOpen && activeProduct && (
            <>
              {/* Backdrop */}
              <div
                className="checkoutBackdrop"
                onClick={() => setIsCheckoutOpen(false)}
              />

              {/* Bottom Sheet */}
              <div className="checkoutSheet">
                <div className="sheetHandle" />

                <button
                  className="sheetBackButton"
                  onClick={() => setIsCheckoutOpen(false)}
                >
                  <img src={backIcon} />
                  <span>Вернуться назад</span>
                </button>

                <div className="checkoutScrollArea">
                  <div className="checkoutSectionTitle">
                    <span className="checkoutSectionLine" />
                    <span className="checkoutSectionText">Добавление товара в корзину</span>
                    <span className="checkoutSectionLine" />
                  </div>

                  <div className="checkoutContent">
                    <div className="checkoutCard">

                      <div className="checkoutHero">
                        <img
                          src={activeProduct.orderIMG}
                          className="checkoutHeroImg"
                          decoding="async"
                          loading="eager"
                          alt=""
                        />
                      </div>

                      <div className="checkoutCardBody">
                        <div className="checkoutMetaRow">

                        <div className="checkoutName">{activeProduct.titleModal}</div>

                          <div className="checkoutPriceBadge" aria-label="Price">
                            <span className="checkoutPriceValue">{activeProduct.price}</span>
                            <img className="checkoutPriceCoin" src={coinIcon} alt="" />
                          </div>
                        </div>
                      
                        <button
                          type="button"
                          className="checkoutSelect"
                          onClick={haptic.light}
                        >
                          <div className="checkoutSelectLeft">
                            <img className="checkoutSelectIcon" src={categoriesIcon} alt="" />
                            <span className="checkoutSelectText">Выберите вкус</span>
                          </div>
                          <span className="checkoutSelectCaret" />
                        </button>

                        <button type="button" className="checkoutActionBtn" disabled>
                          ДОБАВИТЬ ВКУС
                        </button>

                        <button type="button" className="checkoutActionBtn" disabled>
                          ДОБАВИТЬ ЗАКАЗ В КОРЗИНУ
                        </button>
                      </div>

                    </div>
                  </div>

                  <div className="checkoutFooter">
                    
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
            </>
          )}

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