import React from 'react'
import * as S from './Popper.styled'

interface PopperProps {
  children?: React.ReactNode
}

function Popper({ children }: PopperProps): JSX.Element {
  return <S.PopperBase>{children}</S.PopperBase>
}

export default Popper
