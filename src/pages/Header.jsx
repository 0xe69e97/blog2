/** @jsxImportSource theme-ui */
import React from "react";
import HeaderAside from "./HeaderAside";
import ContentWithAside from "./ContentWithAside";

function Header() {
  return (
    <ContentWithAside
      stx={{ pb: [3, 5] }}
      main={
        <>
          {/* <h1>我是丁林，目前在 58 集团任职</h1>
          <p style={{ fontSize: "1.4em" }}>这是我的博客，我感觉它很炫酷！</p>
          <p>所以我抛弃了 VuePress 以及「主题」</p>
          <p>而且这个是使用 Vite 作为构建工具的</p> */}
          <h1>XXXXXXXXXXXXXXXXXX</h1>
          <p style={{ fontSize: "1.4em" }}>XXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXX</p>
        </>
      }
      aside={<HeaderAside />}
    />
  );
}

export default Header;
