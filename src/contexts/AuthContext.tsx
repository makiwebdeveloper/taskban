import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebase.config";

interface IAuthContext {
  login: () => void;
  logout: () => void;
  currentUser: typeof auth.currentUser;
}

const AuthContext = createContext<IAuthContext | null>(null);
export const useAuth = () => useContext(AuthContext) as IAuthContext;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<typeof auth.currentUser>(null);

  const login = async () => {
    await signInWithPopup(auth, provider).catch((error) => console.log(error));
  };

  const logout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [currentUser]);

  const value: IAuthContext = {
    login,
    logout,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
