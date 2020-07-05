import React from 'react'
import Link from 'next/link'
import Popper from '@src/components/common/Popper'
import * as S from './GlobalHeader.styled'

function GlobalHeader(): JSX.Element {
  return (
    <S.Header>
      <S.HeaderInner>
        <S.HeaderColumn>
          <S.CILogo>
            <S.Logo src="/logo.png" alt="my fake trip" />
          </S.CILogo>
          <S.GlobalSearch>
            <S.GlobalSearchField type="search" placeholder="여행지나 상품을 검색해보세요." title="전체 검색" />
            <S.GlobalSearchFieldDeleteButton type="button">삭제</S.GlobalSearchFieldDeleteButton>
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
          </S.GlobalSearch>
        </S.HeaderColumn>
        <S.HeaderColumn>
          <Link href="#" passHref>
            <S.GlobalLink>파트너 등록하기</S.GlobalLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalLink>로그인</S.GlobalLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalLink>회원가입</S.GlobalLink>
          </Link>
        </S.HeaderColumn>
      </S.HeaderInner>
      <S.NavInner>
        <S.GlobalNav>
          <Link href="#" passHref>
            <S.GlobalNavLink current>홈</S.GlobalNavLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalNavLink>투어&amp;티켓</S.GlobalNavLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalNavLink>항공권</S.GlobalNavLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalNavLink>숙소</S.GlobalNavLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalNavLink>국내골프</S.GlobalNavLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalNavLink>패키지</S.GlobalNavLink>
          </Link>
          <Link href="#" passHref>
            <S.GlobalNavLink>할인혜택</S.GlobalNavLink>
          </Link>
        </S.GlobalNav>
      </S.NavInner>
    </S.Header>
  )
}

export default GlobalHeader
