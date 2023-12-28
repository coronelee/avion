import styles from "../../styles/SignUp.module.scss";
export default function SignUp() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1>Join the club and get the benefits</h1>
        <span>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </span>
        <div>
          <input type="text" placeholder="your@email.com" />{" "}
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
