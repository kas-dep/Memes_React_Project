import { NavLink } from "react-router-dom";
import styles from "./NavigationStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughWink } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState("");
  const [navAnimation, setNavAnimation] = useState("");

  const closeMenu = () => {
    setIsNavOpen(false);
    setNavAnimation(styles.hideNav);
  };

  const openMenu = () => {
    setIsNavOpen(true);
    setNavAnimation(styles.showNav);
  };

  const openCloseMenu = () => {
    isNavOpen ? closeMenu() : openMenu();
  };

  return (
    <div className={styles.header}>
      <h3 className={styles.title}>
        <FontAwesomeIcon className={styles.icon} icon={faLaughWink} />
        IT's funny
      </h3>

      <BurgerMenu isNavOpen={isNavOpen} onBurgerClick={openCloseMenu} />

      <div
        onClick={openCloseMenu}
        className={`${styles.navbar} ${navAnimation}`}
      >
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/hot"
        >
          Hot
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/regular"
        >
          Regular
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/favourites"
        >
          Favourites
        </NavLink>
        <NavLink
          activeClassName={styles.activeBtn}
          className={styles.toFormBtn}
          to="/addMeme"
        >
          <FontAwesomeIcon className={styles.plusIcon} icon={faPlus} />
          Add meme
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
