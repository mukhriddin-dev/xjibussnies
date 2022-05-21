import { Route, Redirect } from "react-router-dom";

import useAuth from "../hooks/UseAuth";

const Private = (props) => {
  const [token] = useAuth();

  if (token) {
    return <Route {...props} />;
  }
  return <Redirect to="/register" />;
};

export default Private;
