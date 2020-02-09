/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react";
import { Box, Heading } from '@theme-ui/components'

export default () => {
  return (
    <Box variant="styles.root">
      <Heading as="h1">
        Hello World!
      </Heading>
    </Box>
  )
}