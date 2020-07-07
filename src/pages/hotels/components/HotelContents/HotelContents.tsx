import React from 'react'
import Layout, { Column } from '@src/components/common/Layout'

function HotelContents(): JSX.Element {
  return (
    <Layout>
      <Column width={216}>필터영역</Column>
      <Column>검색리스트</Column>
    </Layout>
  )
}

export default HotelContents
