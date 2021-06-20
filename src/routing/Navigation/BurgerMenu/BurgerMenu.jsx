import { useEffect, useState } from "react";
import styles from "./BurgerMenuStyles.module.css";

const BurgerMenu = ({ onBurgerClick, isNavOpen }) => {
  const [line1Animation, setLine1Animation] = useState("");
  const [line2Animation, setLine2Animation] = useState("");
  const [line3Animation, setLine3Animation] = useState("");

  const toBurger = () => {
    setLine1Animation(styles.toBurgerLine1);
    setLine2Animation(styles.toBurgerLine2);
    setLine3Animation(styles.toBurgerLine3);
  };

  const toX = () => {
    setLine1Animation(styles.toXLine1);
    setLine2Animation(styles.toXLine2);
    setLine3Animation(styles.toXLine3);
  };
  useEffect(() => {
    isNavOpen ? toX() : toBurger();
  }, [isNavOpen]);

  const handleClick = () => {
    onBurgerClick();
  };

  return (
    <button onClick={handleClick} className={styles.burgerMenu}>
      <span
        className={`${styles.line} ${styles.line1} ${line1Animation}`}
      ></span>
      <span
        className={`${styles.line} ${styles.line2} ${line2Animation}`}
      ></span>
      <span
        className={`${styles.line} ${styles.line3} ${line3Animation}`}
      ></span>
    </button>
  );
};
export default BurgerMenu;
