import { FC, useEffect, useState } from "react";
import { useTasks } from "../../../contexts/TasksContext";
import { monthNames } from "../../../utils/constants";
import Layout from "../../layout/Layout";
import { Button, DateInput, ProgressBar } from "../../ui";
import Header from "./header/Header";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const { tasks } = useTasks();
  const [percentage, setPercentage] = useState<number>(0);
  const [monthOfCompletedTasks, setMonthOfCompletedTasks] = useState("");

  useEffect(() => {
    if (monthOfCompletedTasks.length === 0) {
      const complitedTasks = tasks.filter(
        (task) => task.finishedAt.length !== 0
      );
      setPercentage((100 * complitedTasks.length) / tasks.length);
    } else {
      const monthlyTasks = tasks.filter(
        (task) => task.dateOfCompletion?.slice(0, 7) === monthOfCompletedTasks
      );
      const completedMonthlyTasks = monthlyTasks.filter(
        (task) => task.finishedAt.length !== 0
      );
      setPercentage((100 * completedMonthlyTasks.length) / monthlyTasks.length);
    }
  }, [tasks, monthOfCompletedTasks]);

  return (
    <Layout>
      <Header />
      <div className={styles.content}>
        <p className={styles.text}>
          Calculation of the percentage of completed tasks for
          <span>
            {monthOfCompletedTasks
              ? `${
                  monthNames[Number(monthOfCompletedTasks.split("-")[1]) - 1]
                } ${monthOfCompletedTasks.split("-")[0]}`
              : "all time"}
          </span>
        </p>
        <div className="flex items-center justify-between p-10">
          <ProgressBar value={Math.round(percentage) || 0} />
          <DateInput
            value={monthOfCompletedTasks}
            onChange={(e) => setMonthOfCompletedTasks(e.target.value)}
            type="month"
          />
          <Button
            onClick={() => setMonthOfCompletedTasks("")}
            red
            className="px-4 py-1"
          >
            Clear
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
