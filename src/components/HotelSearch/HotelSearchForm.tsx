// flex
// form
import React from 'react'

function HotelSearchForm(): JSX.Element {
  return (
    <form>
      <fieldset>
        <legend>여행지 또는 숙소명</legend>
        <div>
          <i>아이콘</i>
          <input type="text" value="제주도" placeholder="여행지 또는 숙소명" title="여행지 또는 숙소명 변경하기" />
        </div>
      </fieldset>
      <fieldset>
        <legend>숙소 날짜</legend>
        <button type="button" title="선택 창 열기">
          <i>아이콘</i>
          <span>8월 6일 (목) - 8월 7일 (금)</span>
        </button>
      </fieldset>
      <fieldset>
        <legend>객실 수, 인원</legend>
        <button type="button" title="선택 창 열기">
          <i>아이콘</i>
          <span>객실 1개, 총 2명</span>
        </button>
      </fieldset>
      <button type="submit">검색</button>
    </form>
  )
}

export default HotelSearchForm
