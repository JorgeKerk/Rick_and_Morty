import { useState, useEffect } from 'react'
import './App.css'
import About from './components/About/About.jsx'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form'
import Home from './components/Home/Home.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

function App () {
  const [ characters, setCharacters ] = useState( [] )

  // Se realiza un acceso ficticio (sin DB) a la página
  const [ access, setAccess ] = useState( false )
  const username = 'jorgekerk@gmail.com'
  const password = 'Jak1977'
  const navigate = useNavigate()
  const login = userData => {
    if( userData.password === password && userData.username === username ) {
      setAccess( true )
      navigate( '/home' )
    } else {
      alert( 'Usuario y contraseña incorrectos' )
    }
  }
  
  useEffect( () => {
    !access && navigate( '/' )
  }, [ access, navigate ] )

  const onSearch = idCard => {
    if( characters.filter( card => card.id === parseInt( idCard ) ).length !== 0 ){
      window.alert( 'La tarjeta con ese ID ya está cargada' )  
    } else {
      axios( `http://localhost:3001/rickandmorty/character/${ idCard }` )
        .then( ( { data } )  => {
          if( data.name ) {
            setCharacters( oldChars => [ ...oldChars, data ] )
          } else {
            throw Error( 'No hay personajes con ese ID' )
          }
        })
        .catch( error => window.alert( `Error generado: ${ error.message }` ) )
    }
  }
  
  const onClose = id => setCharacters( characters.filter( card => card.id !== id ) )
  
  const onRandom = ()=> {
    let nroRand = Math.floor( Math.random() * 827 )
    let cardFound = nroR => characters.filter( card => card.id === nroR ).length !== 0
    
    while( cardFound( nroRand ) ){ 
      nroRand = Math.floor( Math.random() * 827 )
    }

    onSearch( nroRand )
  } 

  return (
    <div className= 'App' style= { { padding: '25px' } } >
      <Routes>
        <Route exact path= '/' element= { <Form login= { login } /> } />
        <Route 
          exact path= '/home' 
          element= { 
            <Home 
              characters= { characters } 
              onClose= { onClose } 
              onSearch= { onSearch } 
              onRandom= { onRandom } /> } >
          <Route exact path= '/home/cards' element= { <Cards /> } />
          <Route exact path= '/home/favorites' element= { <Favorites /> } />
          <Route exact path= '/home/about' element= { <About /> } />
          <Route exact path= '/home/detail/:detailId' element= { <Detail /> } />
          <Route exact path= '/home/favorites/detail/:detailId' element= { <Detail /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App