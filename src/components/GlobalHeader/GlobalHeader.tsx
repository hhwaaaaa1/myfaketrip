import React from 'react'
import Grid from '@src/components/common/Grid'
import Logo from '@src/components/common/Logo'

function GlobalHeader(): JSX.Element {
  return (
    <header>
      <Grid>
        <div>
          <Logo />
        </div>
        <div></div>
      </Grid>
    </header>
  )
}

export default GlobalHeader
