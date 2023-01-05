import { FC } from "react";
import { Button } from "../../ui";
import styles from "./Login.module.scss";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../../contexts/AuthContext";

const Login: FC = () => {
  const { login, currentUser } = useAuth();

  if (currentUser) return <></>;

  return (
    <div className={styles.login}>
      <Button className={styles.btn} onClick={login}>
        <FaGoogle /> Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
