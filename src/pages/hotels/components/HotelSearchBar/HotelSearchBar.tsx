import React from 'react'
import Popper from '@src/components/common/Popper'
import * as S from './HotelSearchBar.styled'

function HotelSearchBar(): JSX.Element {
  return (
    <S.SearchBar>
      <S.SearchForm>
        <S.SearchFieldset>
          <S.SearchLegend>여행지 또는 숙소명</S.SearchLegend>
          <S.SearchField>
            <S.SearchControl as="input" type="text" defaultValue="제주도" />
            <Popper>
              <ul>
                <li>
                  <button type="button">
                    제주도
                    <sub>제주</sub>
                  </button>
                </li>
              </ul>
            </Popper>
          </S.SearchField>
        </S.SearchFieldset>
        <S.SearchFieldset>
          <S.SearchLegend>숙소 날짜</S.SearchLegend>
          <S.SearchField>
            <S.SearchControl as="button" type="button" title="선택 창 열기">
              8월 9일 (일) - 8월 10일 (월)
            </S.SearchControl>
            <Popper>달력</Popper>
          </S.SearchField>
        </S.SearchFieldset>
        <S.SearchFieldset>
          <S.SearchLegend>객실 수, 인원</S.SearchLegend>
          <S.SearchField>
            <S.SearchControl as="button" type="button" title="선택 창 열기">
              객실 1개, 총 2명
            </S.SearchControl>
            <Popper>
              <div>
                <div>
                  <strong>객실</strong>
                </div>
                <div>
                  <button type="button" disabled>
                    1만큼 감소
                  </button>
                  <span>1</span>
                  <button type="button">1만큼 증가</button>
                </div>
              </div>
              <div>
                <div>
                  <strong>성인</strong>
                </div>
                <div>
                  <button type="button">1만큼 감소</button>
                  <span>2</span>
                  <button type="button">1만큼 증가</button>
                </div>
              </div>
              <div>
                <div>
                  <strong>
                    어린이<sub>만 0세 ~ 17세</sub>
                  </strong>
                </div>
                <div>
                  <button type="button" disabled>
                    1만큼 감소
                  </button>
                  <span>0</span>
                  <button type="button">1만큼 증가</button>
                </div>
              </div>
            </Popper>
          </S.SearchField>
        </S.SearchFieldset>
        <S.SearchButton type="button">검색</S.SearchButton>
      </S.SearchForm>
    </S.SearchBar>
  )
}

export default HotelSearchBar
