import { FC } from "react";
import styles from "./Header.module.scss";
import { BiUserCircle } from "react-icons/bi";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className="flex items-center gap-2">
        User <BiUserCircle className={styles.userIcon} />
      </div>
    </div>
  );
};

export default Header;
