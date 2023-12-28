import Baskett from "./Baskett";
import base from "../listingFull/base";
import { useState } from "react";
import styles from "../../styles/Basket.module.scss";
export default function Basket() {  
  const price = 100;
  const Quantity = 2;
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1>Your shopping cart</h1>
        <div className={styles.container__titles}>
          <h3>Product</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        <div className={styles.container__items}>
          {base.map((base) => (
            <>
              <div className={styles.item}>
                <div className={styles.items__about}>
                  <img className={styles.about__photo} src={base.photo}></img>
                  <div>
                    <h1 className={styles.about__name}>{base.name}</h1>
                    <h1 className={styles.about__about}>{base.about}</h1>
                    <h1 className={styles.about__price}>{base.price}</h1>
                  </div>
                </div>
                <div className={styles.items__quantity}>{Quantity}</div>
                <div className={styles.items__price}>{base.price}</div>
              </div>
            </>
          ))}
        </div>
        <div className={styles.result}>
          <h1>Subtotal £{price}</h1>
          <h2>Taxes and shipping are calculated at checkout</h2>
          <button>Go to checkout</button>
        </div>
      </div>
    </div>
  );
}
