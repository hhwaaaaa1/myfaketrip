import React from 'react'
import styled from 'styled-components'

type LogoProps = {
  image?: string
  logoWidth?: string
}

const LogoWrap = styled.div<LogoProps>`
  width: ${props => (props.logoWidth ? props.logoWidth : '150px')};
`

const LogoImage = styled.img`
  width: 100%;
`

function Logo({ image, logoWidth }: LogoProps): JSX.Element {
  return (
    <LogoWrap logoWidth={logoWidth}>
      <LogoImage src={image} alt={image} />
    </LogoWrap>
  )
}

export default Logo
