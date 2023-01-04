import { FC, ReactNode, useState } from "react";
import Header from "./header/Header";
import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [sidebarVisible, SetSidebarVisibleVisible] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar sidebarVisible={sidebarVisible} />
      <div>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
