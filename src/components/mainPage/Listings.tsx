 
import styles from "../../styles/Listings.module.scss";
export default function Listings() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.collection}>
          <h1>New ceramics</h1>
          <div className={styles.items}>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Parent.png"
              ></img>
              <h2>The Dandy chair</h2>
              <span>£250</span>
            </div>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Parent(1).png"
              ></img>
              <h2>Rustic Vase Set</h2>
              <span>£155</span>
            </div>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Parent(2).png"
              ></img>
              <h2>The Silky Vase</h2>
              <span>£125</span>
            </div>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Parent(3).png"
              ></img>
              <h2>The Lucy Lamp</h2>
              <span>£399</span>
            </div>
          </div>
          <span className={styles.link}><a href="/listing">View collection</a></span>
        </div>
        <div className={styles.collection}>
          <h1>Our popular products</h1>
          <div className={styles.items}>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Large.png"
              ></img>
              <h2>The Poplar suede sofa</h2>
              <span>£980</span>
            </div>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Parent.png"
              ></img>
              <h2>The Dandy chair</h2>
              <span>£250</span>
            </div>
            <div className={styles.item}>
              <img
                className={styles.item__photo}
                src="/public/photoListing/Photo.png"
              ></img>
              <h2>The Dandy chair</h2>
              <span>£250</span>
            </div>  
          </div>
          <span className={styles.link}><a href="/listing">View collection</a></span>
        </div>
      </div>
    </div>
  );
}
