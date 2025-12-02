import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    if (
      path == "/admin" ||
      path == "/manageuser" ||
      path == "/epadmin" ||
      path == "/cpadmin"
    ) {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("role") != "admin"
      ) {
        navigate("/logout");
      }
    } else if (path == "/user") {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("role") != "user"
      ) {
        navigate("/logout");
      }
    } else {
      if (localStorage.getItem("admin")) navigate("/admin");
      else if (localStorage.getItem("role") == "user") navigate("/user");
      else navigate(path);
    }
  }, []);
  return <></>;
}
export default Auth;
