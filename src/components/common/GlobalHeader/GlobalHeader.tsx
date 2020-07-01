import React from 'react'
import Link from 'next/link'
import Popper from '@src/components/common/Popper'
import * as S from './GlobalHeader.styled'

function GlobalHeader(): JSX.Element {
  return (
    <S.Header>
      <div>
        <div>
          <h1>
            <S.Logo src="/logo.png" alt="my fake trip" />
          </h1>
          <div>
            <input type="search" placeholder="여행지나 상품을 검색해보세요." title="전체 검색" />
            <button type="button">삭제</button>
            <Popper>
              <ul>
                <li>
                  <button type="button">제주도</button>
                </li>
                <li>
                  <button type="button">제주도 렌트카</button>
                </li>
              </ul>
            </Popper>
          </div>
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
    </S.Header>
  )
}

export default GlobalHeader
