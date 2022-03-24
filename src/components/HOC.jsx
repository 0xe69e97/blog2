import React from "react";

// 一个懒加载组件壳子
export default function HOC({ name, component }) {
  const Component = component
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Component />
    </React.Suspense>
  );
}
