import React from 'react'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import { useLocation, Outlet } from 'react-router-dom'

function Home( { characters, onClose, onSearch, onRandom } ) {
  const path = useLocation().pathname

  return (
    <>
      <Nav onSearch= { onSearch } onRandom= { onRandom } />
      { path === '/home' && <Cards characters= { characters } onClose= { onClose } title= 'CARDS SELECTIONS'/> }
      <Outlet />
    </>
  )
}

export default Home