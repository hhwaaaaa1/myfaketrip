import React from 'react'
import globalStyles from 'src/styles/global'
import HotelSearchForm from 'src/components/HotelSearchForm'

function hotels(): JSX.Element {
  return (
    <>
      <div>
        <HotelSearchForm />
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default hotels
