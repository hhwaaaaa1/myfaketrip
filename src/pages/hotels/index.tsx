import React from 'react'
import globalStyles from '@src/styles/global'
import GlobalHeader from '@src/components/GlobalHeader'
import HotelSearchForm from '@src/components/HotelSearchForm'

function hotels(): JSX.Element {
  return (
    <>
      <div>
        <GlobalHeader />
        <HotelSearchForm />
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default hotels
