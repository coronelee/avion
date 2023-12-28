import styles from "../../styles/ListFull.module.scss";
import { GrBasket } from "react-icons/gr";
import Baskett from "../basket/Baskett.tsx";
import { useState } from "react";
import base from "./base.ts";
import Basket from "../basket/Basket.tsx";
export default function Item() {
  const [basket, setBasket] = useState<any[]>([]);
  const addBasket = (id:number) => {
    Baskett.push(id)
    console.log(Baskett)
    
  };

  return (
    <a className={styles.item} href="listing-item">
      {base.map((items) => (
        <div>
          <div>
            <img src={items.photo} alt="" />
          </div>
          <h1>{items.name}</h1>
          <h2>
            {items.price}{" "}
            <button
              onClick={() => addBasket(items.id)}
            >
              <GrBasket />
            </button>
          </h2>
        </div>
      ))}
    </a>
  );
}
