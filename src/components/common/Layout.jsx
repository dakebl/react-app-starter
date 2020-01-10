import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Box, Grid } from '@theme-ui/components'

export default ({ children }) => (
  <Grid columns={[1, '1fr']} sx={{ minHeight: '100vh', gridTemplateRows: 'auto 1fr auto' }}>
    <Header>App Name</Header>
    <Box p={2} as="main">
      {children}
    </Box>
    <Footer />
  </Grid>
)