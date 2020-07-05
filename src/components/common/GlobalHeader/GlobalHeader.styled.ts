import styled from 'styled-components'

export const Header = styled.header`
  background: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 0 auto;
  padding: 10px 0;
`

export const HeaderColumn = styled.div`
  display: inline-flex;
  align-items: center;
`

export const GlobalSearch = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 20px;
`

export const GlobalSearchField = styled.input`
  width: 300px;
  height: 45px;
  padding: 0 45px 0 15px;
  border-radius: 5px;
  background: #fafafa;
`

export const GlobalSearchFieldDeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 100%;
`

export const CILogo = styled.h1`
  display: inline-block;
  font-size: 0;
`

export const Logo = styled.img`
  width: 85px;
`

export const GlobalLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  padding: 10px;
`

export const GlobalNav = styled.nav`
  margin: 15px 0 0;
`

export const NavInner = styled.div`
  width: 1060px;
  margin: 0 auto;
`

export const GlobalNavLink = styled.a`
  display: inline-block;
  padding: 10px;
  color: #666;

  ${props =>
    props.current &&
    `
    color: #222;
    font-weight: 500;
    box-shadow: inset 0 -3px 0 #0842AC;
  `}
`
