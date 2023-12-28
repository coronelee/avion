import styles from "../styles/Footer.module.scss";
import { IoShareSocial } from "react-icons/io5";
import { TiSocialAtCircular, TiSocialTwitter } from "react-icons/ti";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialReddit,
} from "react-icons/sl";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__topBlock}>
          <div className={styles.topB__leftBlock}>
            <div className={styles.links}>
              <div className={styles.links__item}>
                <h1>Menu</h1>
                <a href="">New arrivals</a>
                <a href="">Best sellers</a>
                <a href="">Recently viewed</a>
                <a href="">Popular this week</a>
                <a href="">All products</a>
              </div>
              <div className={styles.links__item}>
                <h1>Categories</h1>
                <a href="">Crockery</a>
                <a href="">Furniture</a>
                <a href="">Homeware</a>
                <a href="">Plant pots</a>
                <a href="">Chairs</a>
                <a href="">Crockery</a>
              </div>
              <div className={styles.links__item}>
                <h1>Our company</h1>
                <a href="">About us</a>
                <a href="">Vacancies</a>
                <a href="">Contact us</a>
                <a href="">Privacy</a>
                <a href="">Returns policy</a>
              </div>
            </div>
          </div>
          <div className={styles.topB__rightBlock}>
            <h1>Join our mailing list</h1>
            <div>
              <input type="text" placeholder="your@email.com" />{" "}
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div className={styles.container__botBlock}>
          <h1>Copyright 2022 Avion LTD</h1>
          <div className={styles.botB__social}>
            <IoShareSocial /> <TiSocialTwitter /> <TiSocialAtCircular />{" "}
            <SlSocialLinkedin /> <SlSocialInstagram /> <SlSocialReddit />
          </div>
        </div>
      </div>
    </div>
  );
}
