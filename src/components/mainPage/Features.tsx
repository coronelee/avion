 
import styles from "../../styles/Features.module.scss";
import { CiDeliveryTruck, CiCreditCard2 } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GiDeadWood } from "react-icons/gi";
export default function Features() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <span>What makes our brand different</span>
        <div>
          <div>
            <CiDeliveryTruck />
            <h1>Next day as standard</h1>
            <h2>
              Order before 3pm and get your order the next day as standard
            </h2>
          </div>
          <div>
            <IoIosCheckmarkCircleOutline />
            <h1>Made by true artisans</h1>
            <h2>
              Handmade crafted goods made with real passion and craftmanship
            </h2>
          </div>
          <div>
            <CiCreditCard2 />
            <h1>Unbeatable prices</h1>
            <h2>
              For our materials and quality you won’t find better prices
              anywhere
            </h2>
          </div>
          <div>
            <GiDeadWood />
            <h1>Recycled packaging</h1>
            <h2>
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
