import { FC, ReactNode } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Header from "./header/Header";
import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) return <></>;

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
