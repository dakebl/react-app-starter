/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Flex, NavLink, Heading } from '@theme-ui/components'
// export default ({ children }) => (
//   <Box as="header" p={2}>
//     <Heading as="h1" sx={{ fontWeight: '300' }}>{children}</Heading>
//   </Box>
// )

export default ({ children }) => (
  <Box as="header" p={2}>
    <Heading as="h1" sx={{ fontWeight: '300' }}>
      {children}
    </Heading>
  </Box>
)
