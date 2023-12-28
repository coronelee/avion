import { useState } from "react";
import styles from "../../styles/ListingItem.module.scss";
import base from "../listingFull/base";
export default function ListingItem() {
  const [count, setCount] = useState(0);
  if (count < 0) setCount(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <img className={styles.container__photo} src={base[0].photo}></img>
        <div className={styles.container__about}>
          <h1>{base[0].name}</h1>
          <h2>{base[0].price}</h2>
          <span>{base[0].about}</span>
          <div className={styles.count}>
            <div className={styles.count__}>
              <h1>Amount:</h1> <div onClick={() => setCount(count - 1)}>-</div>
              <div>{count}</div>
              <div onClick={() => setCount(count + 1)}>+</div>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
