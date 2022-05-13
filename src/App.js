import { Switch } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home";
import Layout from "./layout/Layout";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <Layout>
          <PrivateRoute exact path="/home" component={Home} />
        </Layout>
      </Switch>
      {/* <Footer />
      <Feedback /> */}
    </>
  );
}

export default App;
