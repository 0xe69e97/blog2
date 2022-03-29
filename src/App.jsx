import "@code-hike/mdx/dist/index.css";
import { useLocation } from "react-router-dom";

import Routers from "./router/index";
import Header from "@src/components/Header";
import Layout from "./pages/Layout";

function App() {
  const history = useLocation();
  const renderHeader = history.pathname === "/";

  return (
    <Layout responsive={true}>
      {!!renderHeader && <Header />}
      <Routers />
    </Layout>
  );
}

export default App;
