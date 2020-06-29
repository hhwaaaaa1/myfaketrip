import React from 'react'
import styled from 'styled-components'
import { Grid } from 'src/components/Layout'
import theme from 'src/styles/theme'

function HotelSearch(): JSX.Element {
  return (
    <S.Contaier>
      <Grid>호텔서치</Grid>
    </S.Contaier>
  )
}

const S = {
  Contaier: styled.div`
    background: ${theme.color.blue};
  `,
}

export default HotelSearch
