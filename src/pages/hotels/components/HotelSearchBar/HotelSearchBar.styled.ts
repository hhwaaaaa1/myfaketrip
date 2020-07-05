import styled from 'styled-components'

export const SearchBar = styled.div`
  background: #0842ac;
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  width: 1060px;
  margin: 0 auto;
  padding: 12px 0;
`

export const SearchFieldset = styled.fieldset`
  flex: 1;
  margin: 0 5px;
`

export const SearchLegend = styled.legend`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  text-indent: 100%;
  white-space: nowrap;
`

export const SearchField = styled.div`
  position: relative;
  height: 45px;
`

export const SearchControl = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  color: #fff;
  text-align: left;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);

  &:focus {
    color: #000;
    background: rgba(256, 256, 256, 0.95);
  }
`

export const SearchButton = styled.button`
  width: 80px;
  margin: 0 5px;
  color: #f7df25;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
`
