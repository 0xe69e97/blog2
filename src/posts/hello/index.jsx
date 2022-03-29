import PostsHeader from '@src/components/PostsHeader'
import Content from './content.mdx'

export default function Render(props) {
  const { title, author } = props
  const date = new Date(props.date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <>
      <PostsHeader title={title} date={date} author={author} />
      <Content />
    </>
  )
}
