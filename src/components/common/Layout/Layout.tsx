import React from 'react'
import * as S from './Layout.styled'

interface LayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  return <S.Layout>{children}</S.Layout>
}

export default Layout

interface ColumnProps {
  width?: number
  children?: React.ReactNode
}

export function Column({ width, children }: ColumnProps): JSX.Element {
  return <S.Column width={width}>{children}</S.Column>
}
