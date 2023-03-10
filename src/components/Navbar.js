import React from 'react'

import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import Banner from './Banner'

const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <header>
      <aside>
        <button onClick={openSidebar} className='sidebar-toggle'>
          <FaBars />
        </button>
      </aside>
     
    </header>
  )
}

export default Navbar
