import React from 'react'
import Logo from './Logo'

export default { title: 'Logo', Component: 'Logo' }

export const logo: React.FC = () => (
  <div>
    <Logo logoWidth={'500px'} />
  </div>
)
