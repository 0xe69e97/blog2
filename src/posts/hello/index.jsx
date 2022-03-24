function RenderHello(props) {
  console.log(props, 'props')
  return (
    <div>
      <span>Hello {props?.name}</span>
      This is text some content from `_markdown-partial-example.mdx`.
    </div>
  );
}

export default RenderHello
