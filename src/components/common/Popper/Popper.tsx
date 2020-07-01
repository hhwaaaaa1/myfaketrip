import React from 'react'

interface PopperProps {
  children?: React.ReactNode
}

function Popper({ children }: PopperProps): JSX.Element {
  return <div>{children}</div>
}

export default Popper
