import Demo, { metadata } from './index.mdx'
import { Box, Text, Message, Card, Button } from 'theme-ui'

function RenderHello(props) {
  console.log(props, 'props')
  return (
    <div>
      <Message>
        这是一些提示信息：
      </Message>
      <Card>
        <Text>
          大家好，我是丁林
        </Text>
        <Text>如果哈哈哈</Text>
      </Card>
    </div>
  );
}

export default RenderHello
