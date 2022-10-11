import App from "../App";
import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";
import TokenCheck from "../pages/TokenCheck";
import Top from "../pages/Top";

const routers = [
  {
    path: "/login",
    exact: true,
    component: <Login />,
    auth: false,
  },
  {
    path: "/top",
    exact: true,
    component: <Top />,
    auth: true,
  },
  {
    path: "/tokencheck",
    exact: true,
    component: <TokenCheck />,
    auth: true,
  },
  {
    path: "/passwordreset",
    exact: true,
    component: <PasswordReset />,
    auth: true,
  },
];

export default routers;
