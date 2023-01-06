import { FC, ReactNode, useRef } from "react";
import styles from "./Popup.module.scss";

interface Props {
  children: ReactNode;
  setValue: (v: boolean) => void;
  className?: string;
}

const Popup: FC<Props> = ({ children, setValue, className }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const click = (e: any) => {
    if (divRef.current === e.target) setValue(false);
  };

  return (
    <>
      <div className={styles.back}></div>
      <div ref={divRef} onClick={(e) => click(e)} className={styles.container}>
        <div className={`${styles.popupWrapper} ${className}`}>
          <div className={styles.popup}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
