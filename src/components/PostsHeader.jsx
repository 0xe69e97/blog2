import { Box, Heading, Text, Card, Badge } from "theme-ui";

import ContentWithAside from "../pages/ContentWithAside";

function RenderHeader({ title, date, author = "丁林", describe = "" }) {
  return (
    <ContentWithAside
      stx={{ pb: [3, 5] }}
      main={
        <Box>
          <Card>
            <Heading>{title}</Heading>
            <Text>{describe}</Text>
          </Card>
        </Box>
      }
      aside={
        <Box p={4}>
          <Heading>{author}</Heading>
          <Text>{date}</Text>
        </Box>
      }
    />
  )
}

export default RenderHeader;
