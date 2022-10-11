import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../utils/login";
function Auth({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  function tokenCheck() {
    const { auth } = checkAuth();
    if (!auth) {
      navigate("/login");
    } else {
      setLoading(true);
    }
  }
  useEffect(() => {
    setLoading(false);
    tokenCheck();
  }, [navigate]);

  return <>{loading && children}</>;
}

export { Auth };
