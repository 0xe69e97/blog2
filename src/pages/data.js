import { lazy } from 'react'

const COMPONENTS = [
  {
    type: "Node",
    author: 'Smalin',
    title: "自己编写一个基于 nodejs 的自动化部署工具",
    description: "通过 NodeJs 来实现一个属于自己的自动化部署前端工程的一个小工具，了解一下 CI 的整个流程...",
    date: "2019-05-27",
    url: "",
    name: "hello",
    path: "/hello",
    component: lazy(() => import("@posts/hello/index")),
  },
  {
    type: "Project",
    title: "一个 test 文章标题",
    description: "这里是一些文章的简短描述",
    date: "2021/03/23",
    url: "",
    name: "test",
    path: "/test",
    component: lazy(() => import("@posts/hello1/index.mdx")),
  },
  {
    type: "Project",
    title: "关于这篇博客",
    description: "通过 React + Vite + MDX + Code Hike 进行开发的博客网站，有关技术细节可以详细看看～",
    date: "2021-03-29",
    url: "",
    name: "about",
    path: "/about",
    component: lazy(() => import("@posts/about/index")),
    pinned: true,
  },
]

export default COMPONENTS
