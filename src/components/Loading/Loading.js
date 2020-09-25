import React from 'react'
import {Box, Grid, ResponsiveContext} from 'grommet'
import {LoadingCard} from './LoadingCard'
import {LoadingBar} from './LoadingBar'

export const Loading = props => {
  return (
    <ResponsiveContext.Consumer>
       {size => (
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='start'>
            <LoadingBar />
            {size !== 'small' ?(
                <Grid
                  rows={['medium', 'medium', 'medium']}
                  columns={['medium', 'medium', 'medium']}
                  gap="small"
                >
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                </Grid>
              ) : (
                <Grid
                  rows={['medium']}
                  columns={['medium']}
                  gap="small"
                >
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                </Grid>
              )}
            </Box>
        </Box>
       )}
    </ResponsiveContext.Consumer>
  )
}