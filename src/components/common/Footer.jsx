/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Flex, Text, Image, Badge } from '@theme-ui/components'

export default () => (
  <Box as="footer" p={2} sx={{ flex: '1 1 auto', bottom: 0 }}>
    <Text>
      © New App 2019
    </Text>
  </Box>
)