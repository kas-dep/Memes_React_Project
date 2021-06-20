import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar, faThumbsDown, faThumbsUp, } from "@fortawesome/free-regular-svg-icons";
import styles from "./MemStyles.module.css";

const Mem = ({ mem, onMemChange }) => {
  const { title, upvotes, downvotes, img, isFavourite } = mem;

  const handleFavouriteClick = () => {
    onMemChange({ ...mem, isFavourite: !isFavourite });
  };

  const handleUpvoteClick = () => {
    onMemChange({ ...mem, upvotes: upvotes + 1 });
  };

  const handleDownvoteClick = () => {
    onMemChange({ ...mem, downvotes: downvotes + 1 });
  };

  const starIcon = isFavourite ? faStar : farStar;

  return (
    <div className={styles.mem}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button
          onClick={handleFavouriteClick}
          className={styles.isFavouriteBtn}
        >
          <FontAwesomeIcon className={styles.star} icon={starIcon} />
        </button>
      </div>
      <img className={styles.image} src={img} alt="mem" />
      <div className={styles.votes}>
        <button onClick={handleUpvoteClick} className={styles.upvotesBtn}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <span className={styles.upvotes}>{upvotes}</span>
        <button onClick={handleDownvoteClick} className={styles.downvotesBtn}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <span className={styles.downvotes}>{downvotes}</span>
      </div>
    </div>
  );
};

export default memo(Mem);
