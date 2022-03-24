function RenderHello(props) {
  console.log(props, 'props')
  return (
    <div>
      <span>Hello {props?.name}</span>
      <h1>test</h1>
    </div>
  );
}

export default RenderHello
