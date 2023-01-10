import { FC } from "react";
import styles from "./Menu.module.scss";
import { menuData } from "./menu.data";
import { Link, useLocation } from "react-router-dom";

const Menu: FC = () => {
  const location = useLocation();

  return (
    <div className={styles.menu}>
      <p>Menu</p>
      <ul className={styles.menuList}>
        {menuData.map((item) => (
          <li key={item.link}>
            <Link
              to={item.link}
              className={
                location.pathname === item.link
                  ? styles.activeItem
                  : styles.item
              }
            >
              {<item.icon />} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
