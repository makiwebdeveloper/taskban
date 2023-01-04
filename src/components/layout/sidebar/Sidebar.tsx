import { FC } from "react";
import { Button } from "../../ui";
import Menu from "./menu/Menu";
import styles from "./Sidebar.module.scss";

interface Props {
  sidebarVisible: boolean;
}

const Sidebar: FC<Props> = ({ sidebarVisible }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.title}>Taskban</h1>
        <Menu />
      </div>
      <div className="mx-auto">
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
