import { LoginScreen } from "../../screens";
import { useSelector } from "react-redux";
const ProtectedLogin = ({ Component }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return !isLoggedIn ? <Component /> : <LoginScreen />;
};

export default ProtectedLogin;
