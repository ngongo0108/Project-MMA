import { Profile } from "../../screens";
import { useSelector } from "react-redux";
const ProtectedLogin = ({ Component }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return !isLoggedIn ? <Component /> : <Profile />;
};

export default ProtectedLogin;
