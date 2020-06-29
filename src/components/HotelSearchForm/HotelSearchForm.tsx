import React from 'react'
import styled from 'styled-components'
import Grid from 'src/components/common/Grid'
import { SpotIcon, CalendarIcon, PeopleIcon } from 'src/components/common/Icons'

function HotelSearchForm(): JSX.Element {
  return (
    <S.Container>
      <Grid>
        <S.Form>
          <S.FormGroup>
            <S.GroupTitle>여행지 또는 숙소명</S.GroupTitle>
            <S.GroupBody>
              <S.GroupIcon>
                <SpotIcon />
              </S.GroupIcon>
              <S.GroupControl
                as="input"
                type="text"
                defaultValue="제주도"
                placeholder="여행지 또는 숙소명"
                title="여행지 또는 숙소명 변경하기"
              />
            </S.GroupBody>
          </S.FormGroup>
          <S.FormGroup>
            <S.GroupTitle>숙소 날짜</S.GroupTitle>
            <S.GroupBody>
              <S.GroupIcon>
                <CalendarIcon />
              </S.GroupIcon>
              <S.GroupControl as="button" type="button" title="선택 창 열기">
                8월 6일 (목) - 8월 7일 (금)
              </S.GroupControl>
            </S.GroupBody>
          </S.FormGroup>
          <S.FormGroup>
            <S.GroupTitle>객실 수, 인원</S.GroupTitle>
            <S.GroupBody>
              <S.GroupIcon>
                <PeopleIcon />
              </S.GroupIcon>
              <S.GroupControl
                as="button"
                type="button"
                title="선택 창 열기"
                endIcon={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE4IDlsLTYuMDAzIDZMNiA5LjAwNyIvPgo8L3N2Zz4K`}
              >
                객실 1개, 총 2명
              </S.GroupControl>
            </S.GroupBody>
          </S.FormGroup>
          <S.SubmitButton type="submit">검색</S.SubmitButton>
        </S.Form>
      </Grid>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    padding: 10px 0;
    background: gray;
  `,
  Form: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  FormGroup: styled.fieldset`
    flex: 1;
    height: 48px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    background: #fff;
    &:first-child {
      margin-left: 0;
    }
  `,
  GroupTitle: styled.legend`
    overflow: hidden;
    position: absolute;
    left: 1px;
    height: 1px;
    text-indent: 100%;
    white-space: nowrap;
  `,
  GroupBody: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
  GroupIcon: styled.i`
    flex: 0 0 24px;
    margin: 0 10px;
  `,
  GroupControl: styled.div`
    flex: 1;
    border: 0;
    text-align: left;
    background: none;
    appearance: none;
    ${props =>
      props.endIcon &&
      `
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        background: url(${props.endIcon}) center no-repeat;

      }
    `}
  `,
  SubmitButton: styled.button`
    height: 100%;
    margin-left: 5px;
    border: 0;
    background: none;
  `,
}

export default HotelSearchForm
