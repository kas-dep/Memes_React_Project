import nomemes from "../../assets/images/nomemes.PNG";
import styles from "./NoMemesInfoStyles.module.css";

export const NoMemesInfo = () => {
  return <img className={styles.img} src={nomemes} alt="there is no memes" />;
};
