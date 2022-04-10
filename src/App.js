import { useRoutes } from "react-router-dom";
import { useCustomRoutes } from "./navigation/useCustomNavigation";
import CustomHeader from "./component/header";
import CustomFooter from "./component/footer";

function App() {
  const routes = useRoutes(useCustomRoutes());
  return (
    <div className="app">
      <CustomHeader />
      <div>{routes}</div>
      <CustomFooter />
    </div>
  );
}
export default App;
