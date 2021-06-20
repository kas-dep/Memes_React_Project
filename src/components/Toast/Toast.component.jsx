import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styles from "./ToastStyles.module.css";

const Toast = ({ message, type, hideToast }) => {
  const handleClick = () => {
    hideToast();
  };

  useEffect(() => {
    const timeout = setTimeout(() => hideToast(), 4000);
    return () => clearTimeout(timeout);
  }, [hideToast]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button className={styles.closeBtn} onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default Toast;
