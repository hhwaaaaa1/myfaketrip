import React, { useState } from 'react'
import styled from 'styled-components'

const InputWrap = styled.div<InputType>`
  border: 0;
  background-color: #f1f3f5;
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 5px;
  position: relative;
  padding: 8px;
  &::before {
    content: '';
    position: relative;
    background: url('https://w7.pngwing.com/pngs/605/56/png-transparent-search-icon-computer-icons-android-desktop-search-button-internet-share-icon-search-button.png')
      no-repeat;
    background-size: 100%;
    width: 35px;
    height: 35px;
    left: 10px;
    top: 8px;
  }
  &.active {
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(52, 58, 64, 0.15), 0 0 1px 0 rgba(52, 58, 64, 0.2);
    color: #495056;
  }
`

const InputText = styled.input`
  border: 0px;
  background-color: #f1f3f5;
  outline: none;
  margin-left: 15px;
  width: 100%;
  &.active {
    background-color: #fff;
  }
`

type InputType = {
  image?: string
  placeholder?: string
  children?: any
}

function Input({ image, placeholder }: InputType): JSX.Element {
  const [input, setInput] = useState(false)
  const handleInput = () => {
    setInput(true)
  }

  return (
    <InputWrap image={image} className={input === true ? 'active' : ''} onClick={() => handleInput()}>
      <InputText placeholder={placeholder} className={input === true ? 'active' : ''} />
    </InputWrap>
  )
}

export default Input
