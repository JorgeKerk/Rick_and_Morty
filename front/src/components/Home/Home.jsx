import { useEffect } from 'react'
import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import { useLocation, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getFavorites } from '../../redux/actions'

function Home( { characters, onClose, onSearch, onRandom } ) {
  const path = useLocation().pathname
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getFavorites())  
  }, [ dispatch ] )

  return (
    <>
      <Nav onSearch= { onSearch } onRandom= { onRandom } />
      { path === '/home' && <Cards characters= { characters } onClose= { onClose } title= 'CARDS SELECTIONS'/> }
      <Outlet />
    </>
  )
}

export default Home