import React from 'react'
import Link from 'next/link'

function GlobalHeader(): JSX.Element {
  return (
    <header>
      <div>
        <div>
          <h1>
            <img src="" alt="my fake trip" />
          </h1>
          <input type="search" placeholder="여행지나 상품을 검색해보세요." title="전체 검색" />
        </div>
        <div>
          <Link href="#">파트너 등록하기</Link>
          <Link href="#">로그인</Link>
          <Link href="#">회원가입</Link>
        </div>
      </div>
      <div>
        <nav>
          <Link href="#">홈</Link>
          <Link href="#">투어&amp;티켓</Link>
          <Link href="#">항공권</Link>
          <Link href="#">숙소</Link>
          <Link href="#">국내골프</Link>
          <Link href="#">패키지</Link>
          <Link href="#">할인혜택</Link>
        </nav>
      </div>
    </header>
  )
}

export default GlobalHeader
