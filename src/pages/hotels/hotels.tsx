import React from 'react'
import GlobalHeader from '@src/components/common/GlobalHeader'
import HotelSearchBar from './components/HotelSearchBar'

function Hotels(): JSX.Element {
  return (
    <>
      <GlobalHeader />
      <HotelSearchBar />
      <style jsx global>{`
        html {
          font-size: 10px;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          margin: 0;
          font: 400 14px -apple-system, BlinkMacSystemFont, Malgun Gothic, Roboto, Helvetica, Arial, sans-serif;
        }

        * {
          box-sizing: border-box;
          outline: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        input {
          padding: 0;
          font: inherit;
          border: 0;
          background: none;
        }

        button {
          padding: 0;
          border: 0;
          background: none;
        }

        a {
          font: inherit;
          color: inherit;
          text-decoration: none;
        }

        fieldset {
          margin: 0;
          padding: 0;
          border: 0;
        }
      `}</style>
    </>
  )
}

export default Hotels
