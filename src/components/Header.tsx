import styles from "../styles/Header.module.scss";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function getWindow() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
export default function App() {
  const [scroll, setScroll] = useState(window.scrollY);
  const [width, setWidth] = useState(getWindow());

  useEffect(() => {
    function handleResize() {
      setWidth(getWindow());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bot = () => {
    if (scroll > 200) {
      const style = {
        display: "none",
      };
      return style;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__top}>
          <HiMiniMagnifyingGlass />
          <a href="/">Avion</a>
          <div>
            <a href="/basket">
              <FiShoppingCart />
            </a>
            {width.width < 450 ? (
              <a href="">
                <RxHamburgerMenu />
              </a>
            ) : (
              <a href="">
                <CgProfile />
              </a>
            )}
          </div>
        </div>
        <div className={styles.container__bot} style={bot()}>
          <div>
            <a href="">Plant pots</a>
            <a href="">Ceramics</a>
            <a href="">Tables</a>
            <a href="">Chairs</a>
            <a href="">Crockery</a>
            <a href="">Tableware</a>
            <a href="">Cutlery</a>
          </div>
        </div>
      </div>
    </div>
  );
}
