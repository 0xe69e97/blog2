import "@code-hike/mdx/dist/index.css";
// import Content from "./pages/Content"
import Routers from "./router/index";
import Header from "./pages/Header";
import Layout from "./pages/Layout";

function App({ data }) {
  return (
    <Layout responsive={true}>
      <Header />
      <Routers />
      {/* <Content /> */}
    </Layout>
  );
}

export default App;
