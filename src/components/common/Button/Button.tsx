import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  label?: string
  onClick?: () => void
  customClass?: string
  style?: React.CSSProperties
  buttonSize?: string
  type?: string
}

const ButtonBox = styled.button<ButtonProps>`
  color: #666d75;
  outline: none;
  border: 0px;
  padding: 10px 30px;
  background-color: #fff;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #f5f6f7;
  }

  &.outline {
    color: #00a8cc;
    border: 1px solid #00a8cc;
    &:hover {
      background-color: #f5fbff;
    }
  }
`

function Button({ label, style, onClick, customClass, buttonSize, type }: ButtonProps): JSX.Element {
  return (
    <ButtonBox onClick={onClick} style={style} className={customClass || ''}>
      {label}
    </ButtonBox>
  )
}

export default Button
