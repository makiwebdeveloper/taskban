import { FC } from "react";
import styles from "./ProgressBar.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar: FC<{ value: number }> = ({ value }) => {
  return (
    <div className="w-[150px] h-[150px]">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "butt",
          textSize: "14px",
          pathTransitionDuration: 0.8,
          pathColor: `#48409E`,
          textColor: "#48409E",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};

export default ProgressBar;
