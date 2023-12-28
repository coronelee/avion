import { useHref } from "react-router-dom";
import styles from "../../styles/HeroBlocks.module.scss";
export default function HeroBlocks() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__left}>
          <div>
            <h1>The furniture brand for the future, with timeless designs</h1>
            <div>
              <a href="/listing">View collection</a>
            </div>
          </div>
          <span>
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </span>
        </div>
        <img className={styles.container__right} src="/public/RightImage.png"></img>
      </div>
    </div>
  );
}
