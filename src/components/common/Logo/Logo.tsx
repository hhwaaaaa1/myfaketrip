import React from 'react'
import styled from 'styled-components'
// import logo from '@assets/images/logo.png'

type LogoProps = {
  logoWidth?: string
}

const LogoWrap = styled.div<LogoProps>`
  width: ${props => (props.logoWidth ? props.logoWidth : '150px')};
`

const LogoImage = styled.img`
  width: 100%;
`

function Logo({ logoWidth }: LogoProps): JSX.Element {
  return <LogoWrap logoWidth={logoWidth}>{/* <LogoImage src={logo} alt="my real trip" /> */}</LogoWrap>
}

export default Logo
