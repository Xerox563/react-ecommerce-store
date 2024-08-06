import React, { useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { ReactComponent as GitHubLogo } from "../../Resources/image/githublogo.svg";
import { ReactComponent as Enter } from "../../Resources/image/enter.svg";
import { ReactComponent as LinkedIn } from "../../Resources/image/linkedin.svg";
import { motion } from "framer-motion";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";
import games from "../../utils/games";
import Typewriter from "../../Components/Typewriter/Typewriter";
import Scroll from "../../Components/After/Scroll";

const Home = (props) => {
  const {
    shownGames,
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleRemoveFromCart,
    hoverState,
    setHoverState,
    overlap,
    setOverlap,
    openGamePage,
  } = props;

  const [browsing, setBrowsing] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleHover = (e) => {
    let newHoverState = hoverState[e.target.id];
    newHoverState.hovered = !newHoverState.hovered;

    setHoverState([...hoverState, (hoverState[e.target.id] = newHoverState)]);
  };

  const handleBrowse = () => {
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate("/react-ecommerce-store/browse");
    }, 1500);
  };

  const handleHome = () => {
    setBrowsing(false);
    navigate("/");
  };

  const handleNavGamePage = () => {
    setHoverState([...hoverState, (hoverState[21].hovered = false)]);
    navigate("/react-ecommerce-store/games/riseofthetombraider");
  };

  const handleNavNotFoundQuery = () => {
    navigate("/react-ecommerce-store/games/404");
  };

  const handlePlayDice = () => {
    let randomIndex = Math.floor(Math.random() * 32);
    let randomSurname = games[randomIndex].surname;
    setOverlap(true);
    setTimeout(() => {
      setBrowsing(true);
      navigate(`/react-ecommerce-store/games/${randomSurname}`);
    }, 1500);
  };

  const variants = {
    hidden: { opacity: 1, x: -150 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 150 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 900 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { y: { type: "tween", duration: 1.5, bounce: 0.3 } },
    },
  };

  return (
    <>
      <div className={styles.main}>
        {overlap ? (
          <motion.div
            className={styles.overlap}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
        ) : null}

        {cartDisplayed ? (
          <Cart
            cartDisplayed={cartDisplayed}
            handleOpenCart={handleOpenCart}
            handleCloseCart={handleCloseCart}
            cart={cart}
            cartAmount={cartAmount}
            handleHover={handleHover}
            hoverState={hoverState}
            clearCart={clearCart}
            handleRemoveFromCart={handleRemoveFromCart}
            openGamePage={openGamePage}
          />
        ) : null}

        <div className={styles.home}>
          <video autoPlay loop controls preload="auto" className={styles.video}>
            <source
              src={require("../../Resources/image/latest_gta.mp4")}
              type="video/mp4"
            />
          </video>

          <NavBar
            handleHover={handleHover}
            hoverState={hoverState}
            browsing={browsing}
            handleBrowse={handleBrowse}
            handleHome={handleHome}
            landingPage={landingPage}
            cartAmount={cartAmount}
            handleOpenCart={handleOpenCart}
            handleCloseCart={handleCloseCart}
          />
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.splash}>
                <div className={styles.type}>
                  <Typewriter />
                </div>

                <p className={styles.intro}>
                  Welcome to Game Bazaar! 🌟🎮 Discover a dynamic platform for
                  buying, selling, and trading your favorite games. Explore a
                  vast library 📚 across all platforms and shop securely with
                  our trusted payment system 🔒.
                </p>
              </div>

              <div className={styles.buttons}>
                <a
                  href="https://github.com/Xerox563/GameBazaar/tree/master"
                  target="_blank"
                >
                  <button className={styles.cta} aria-label="View Repository">
                    <GitHubLogo className={styles.ctaSVG} />
                    GitHub
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-gangwar-a63174250/"
                  target="_blank"
                >
                  <button
                    className={`${styles.cta} ${styles.lastChild}`}
                    aria-label="Open LinkedIn"
                  >
                    <LinkedIn
                      className={`${styles.ctaSVG} ${styles.linkedin}`}
                    />
                    <span>LinkedIn</span>
                  </button>
                </a>
                <button
                  className={`${styles.cta} ${styles.browseBtn}`}
                  onClick={handleBrowse}
                  aria-label="Browse"
                >
                  <Enter className={styles.ctaSVG} />
                  Browse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
