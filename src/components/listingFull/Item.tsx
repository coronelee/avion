import styles from "../../styles/ListFull.module.scss";
import { GrBasket } from "react-icons/gr";
import base from "./base.ts";
export default function Item() {
 

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
            <button>
              <GrBasket />
            </button>
          </h2>
        </div>
      ))}
    </a>
  );
}
