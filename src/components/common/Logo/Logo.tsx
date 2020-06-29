import React from 'react'
import styled from 'styled-components'

type LogoProps = {
  image?: string
  logoWidth?: string
}

const LogoWrap = styled.div<LogoProps>`
  width: ${props => (props.logoWidth ? props.logoWidth : 'width:150px')};
`

const LogoImage = styled.img`
  width: 100%;
`

function Logo({ image }: LogoProps): JSX.Element {
  return (
    <LogoWrap>
      <LogoImage src={image} alt={image} />
    </LogoWrap>
  )
}

export default Logo
