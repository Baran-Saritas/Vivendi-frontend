import "./App.css";
import { useRoutes } from "react-router-dom";
import { useCustomRoutes }from "./navigation/useCustomNavigation";
import CustomHeader from "./component/header";
import CustomCard from "./component/card";
import { Box } from "grommet";
import Hcard from "./component/hcard";
import CustomFooter from "./component/footer";


function App() {
  const routes = useRoutes(useCustomRoutes());
  return (
    <div style={{}}>
      <CustomHeader />
      <br />
      {routes}
      <CustomFooter />
    </div>
  );
}
export default App;
