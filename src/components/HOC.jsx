import React from "react";
import { Spinner } from 'theme-ui'

// 一个懒加载组件壳子
export default function HOC(props) {
  const Component = props.component
  return (
    <React.Suspense fallback={<Spinner title='Loading...' />}>
      <Component {...props} />
    </React.Suspense>
  );
}
