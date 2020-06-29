import React from 'react'
import styled from 'styled-components'

interface GridProps {
  children?: React.ReactNode
}

function Grid({ children }: GridProps): JSX.Element {
  return <S.Grid>{children}</S.Grid>
}

const S = {
  Grid: styled.div`
    max-width: 1080px;
    margin: 0 auto;
  `,
}

export default Grid
