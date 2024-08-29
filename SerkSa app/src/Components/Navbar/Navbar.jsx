//import
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import Serksa from "../../assets/icon/logo1.svg";
import { CiMenuBurger } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import {
  FaHome,
  FaHandHoldingUsd,
  FaQuestionCircle,
  FaProjectDiagram,
} from "react-icons/fa";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
function Navbar() {
  return (
    <>
      <MediaQuery maxWidth={1023}>
        <IsSmall />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <IsBig />
      </MediaQuery>
    </>
  );
}
export default Navbar;

const animation = {
  hidden: {
    marginTop: "-100vh",
  },
  visible: {
    marginTop: 0,
    transition: { delay: 0.5 },
  },
};
const waitlist = "https://forms.gle/e7MvMrJNAo7dZ5jZ8";

const IsBig = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <motion.div
          className={styles.SerksaLogo}
          variants={animation}
          initial="hidden"
          animate="visible"
        >
          <img src={Serksa} style={{ width: "60px", height: "58px" }} alt="" />
          <h4 className={styles.SerkSaText}>SERKSA</h4>
        </motion.div>
        <div
          initial={{ marginTop: -100 }}
          animate={{ marginTop: 0 }}
          className={styles.Navlist}
        >
          <motion.div
            className={styles.navTest}
            variants={animation}
            initial="hidden"
            animate="visible"
          >
            <HashLink smooth to="#home">
              <div>Home</div>
            </HashLink>
            <HashLink smooth to="#service">
              <div>Our service</div>
            </HashLink>
            <HashLink smooth to="#about">
              <div>About Us</div>
            </HashLink>
            <HashLink smooth to="#key">
              <div>Our Work</div>
            </HashLink>
          </motion.div>
          <div className={styles.mainButton}>
            <button className={styles.contactButton}>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

const IsSmall = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.SerksaLogo}>
          <img src={Serksa} style={{ width: "60px", height: "58px" }} alt="" />
          <h4 className={styles.SerkSaText}>SERKSA</h4>
        </div>
        <div className={styles.dropDown}>
          {click ? (
            <RxCrossCircled onClick={handleClick} className={styles.menu} />
          ) : (
            <CiMenuBurger onClick={handleClick} className={styles.out} />
          )}
        </div>
      </div>
      <div className={click ? styles.showMenu : styles.hideMenu}>
        <div className={styles.menuList}>
          {<FaHome className={styles.sectionIcon} />}
          {<FaHandHoldingUsd className={styles.sectionIcon} />}
          {<FaQuestionCircle className={styles.sectionIcon} />}
          {<FaProjectDiagram className={styles.sectionIcon} />}
        </div>
        <div className={styles.menuDetail}>
          <HashLink smooth to="#home">
            <div>Home</div>
          </HashLink>
          <HashLink smooth to="#key">
            <div>Our service</div>
          </HashLink>
          <HashLink smooth to="#feature">
            <div>About Us</div>
          </HashLink>
          <Link to={waitlist}>
            <div>Sign Up</div>
          </Link>
        </div>
        <div className={styles.contactButton}>
          <button id={styles.contact}>
            <Link to="/signup">Contact Us</Link>
          </button>
        </div>
      </div>
    </>
  );
};
