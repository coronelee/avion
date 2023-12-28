import styles from "../../styles/About.module.scss";
export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__leftBlock}>
          <div>
            <h1>
              From a studio in London to a global brand with over 400 outlets
            </h1>
            <span>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. 
            </span> 
            <br /> <br /> 
            <span> 
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </span>
          </div>
          <button>Get in touch</button>
        </div>
        <img
          className={styles.container__rightBlock}
          src="/public/Image.png"
        ></img>
      </div>
    </div>
  );
}
