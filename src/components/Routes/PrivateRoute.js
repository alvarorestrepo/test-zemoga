import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const logged = useSelector(state => state.logged);
  const logged = true;

  return (
    <Route {...rest}>{logged ? <Component /> : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;
