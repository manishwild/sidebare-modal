import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  // iseGlobalContext is custom hook name should always start with use
  // custome hook name must start with use
  const { openSideBar, openModal } = useGlobalContext()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>Show Modal</button>
    </main>
  )
}

export default Home
