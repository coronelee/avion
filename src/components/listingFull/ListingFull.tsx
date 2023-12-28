import styles from "../../styles/ListFull.module.scss";
import Item from "./Item";
export default function ListingFull() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__picture}></div>
      <div className={styles.wrapper__container}>
        <div className={styles.container__filter}>
          <div>
            <h1>Product type</h1>
            <label ><input type="checkbox" name="" id="" />Furniture</label>
            <label ><input type="checkbox" name="" id="" />Homeware</label>
            <label ><input type="checkbox" name="" id="" />Sofas</label>
            <label ><input type="checkbox" name="" id="" />Homeware</label>
            <label ><input type="checkbox" name="" id="" />Light fittings</label>
            <label ><input type="checkbox" name="" id="" />Accessories</label>
          </div>
          <div>
            <h1>Price</h1>
            <label ><input type="checkbox" name="" id="" />0 - 100</label>
            <label ><input type="checkbox" name="" id="" />101 - 250</label>
            <label ><input type="checkbox" name="" id="" />250 +</label>
            </div>
          <div>
            <h1>Designer</h1>
            <label ><input type="checkbox" name="" id="" />Robert Smith</label>
            <label ><input type="checkbox" name="" id="" />Liam Gallagher</label>
            <label ><input type="checkbox" name="" id="" />Thom Yorke</label>
            <label ><input type="checkbox" name="" id="" />Biggie Smalls</label> 
            </div>
        </div>
        <div className={styles.container__items}>
            <Item />
        </div>
      </div>
    </div>
  );
}
