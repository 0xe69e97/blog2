import { lazy } from 'react'

const COMPONENTS = [
  {
    type: "Project",
    title: "一个文章标题",
    description: "这里是一些文章的简短描述",
    date: "2021/03/22",
    url: "",
    name: "hello",
    path: "/hello",
    component: lazy(() => import("@posts/hello/index.mdx")),
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
  }
]

export default COMPONENTS
