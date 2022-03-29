/** @jsxImportSource theme-ui */
import HeaderAside from "./HeaderAside";
import ContentWithAside from "../pages/ContentWithAside";
import { Card, Heading } from "theme-ui";

function Header(props) {
  console.log(props, 'header props')
  return (
    <ContentWithAside
      stx={{ pb: [3, 5] }}
      main={
        <Card>
          <Heading>我是丁林</Heading>
          <Heading as="h3">目前在 58 集团任职</Heading>
        </Card>
      }
      aside={<HeaderAside />}
    />
  );
}

export default Header;
