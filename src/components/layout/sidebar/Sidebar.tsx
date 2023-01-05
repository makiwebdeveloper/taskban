import { FC } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Button } from "../../ui";
import Menu from "./menu/Menu";
import styles from "./Sidebar.module.scss";

interface Props {
  sidebarVisible: boolean;
}

const Sidebar: FC<Props> = ({ sidebarVisible }) => {
  const { logout } = useAuth();

  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.title}>Taskban</h1>
        <Menu />
      </div>
      <div className="mx-auto">
        <Button onClick={logout} className="px-4 py-1">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
