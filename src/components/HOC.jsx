import React from "react";
import { Spinner } from 'theme-ui'

// 一个懒加载组件壳子
export default function HOC({ name, component }) {
  const Component = component
  return (
    <React.Suspense fallback={<Spinner title='Loading...' />}>
      <Component />
    </React.Suspense>
  );
}
