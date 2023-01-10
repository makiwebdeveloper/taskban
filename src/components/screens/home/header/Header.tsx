import { FC } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useTasks } from "../../../../contexts/TasksContext";
import styles from "./Header.module.scss";
import HeaderImage from "../../../../assets/header-img.svg";

const Header: FC = () => {
  const { currentUser } = useAuth();
  const { tasks } = useTasks();

  const tasksInProgressLength = tasks.filter(
    (task) => task.status == "in progress"
  ).length;

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.title}>
          Hello, <span>{currentUser?.displayName}</span>!
        </p>
        <p className={styles.text}>
          You have {tasksInProgressLength} projects in progress. Keep up the
          good work!
        </p>
      </div>
      <img className={styles.img} src={HeaderImage} alt="header image" />
    </div>
  );
};

export default Header;
