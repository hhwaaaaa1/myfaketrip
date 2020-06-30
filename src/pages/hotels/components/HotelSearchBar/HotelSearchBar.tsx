import React from 'react'

function HotelSearchBar(): JSX.Element {
  return (
    <div>
      <form>
        <fieldset>
          <legend>여행지 또는 숙소명</legend>
          <div>
            <input type="text" />
          </div>
        </fieldset>
        <fieldset>
          <legend>숙소 날짜</legend>
          <div>
            <button type="button" title="선택 창 열기"></button>
          </div>
        </fieldset>
        <fieldset>
          <legend>객실 수, 인원</legend>
          <div>
            <button type="button" title="선택 창 열기"></button>
          </div>
        </fieldset>
        <button type="button">검색</button>
      </form>
    </div>
  )
}

export default HotelSearchBar
