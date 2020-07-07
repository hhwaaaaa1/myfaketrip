import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  width: 1060px;
  margin: 0 auto;
`

export const Column = styled.div`
  flex: 1;
  ${({ width }) => `flex: 0 0 ${width}px;`}
`
