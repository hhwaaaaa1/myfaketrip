import styled from 'styled-components'

type InputType = {
  image?: string
  placeholder?: string
  children?: any
}

export const InputWrap = styled.div<InputType>`
  border: 0;
  background-color: none;
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
    border-left: 1px solid #dee3e2;
    border-bottom: 1px solid #dee3e2;
  }
`

export const InputText = styled.input`
  border: 0px;
  background-color: none;
  outline: none;
  margin-left: 15px;
  width: 100%;
`
