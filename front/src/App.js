import { useState, useEffect } from 'react'
// import './App.css'
import About from './components/About/About.jsx'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail.jsx'
import Favorites from './components/Favorites/Favorites'
import Form from './components/Form/Form'
import Home from './components/Home/Home.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Background from './components/Background/Background'

function App () {
  const [ characters, setCharacters ] = useState( [] )

  // Se realiza un acceso ficticio (sin DB) a la página
  const [ access, setAccess ] = useState( false )
  const username = 'admin@mail.com'
  const password = '123456'
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

  const onSearch = async searchCard => { 
    try{
      if( !isNaN(searchCard)){
        if( characters.filter( card => card.id === parseInt( searchCard ) ).length !== 0 ){
          throw Error( 'La tarjeta con ese ID ya está cargada' )  
        }
        const { data } = await axios( `http://localhost:3001/rickandmorty/character/${ searchCard }` )
        if( data.name ) {
          setCharacters( oldChars => [ ...oldChars, data ] )
        } else {
          throw Error( 'No hay personajes con ese ID' )
        }
      } else {
        const { data } = await axios( `http://localhost:3001/rickandmorty/character/?name=${ searchCard }` )
        console.log(data)
        if( data.length ) {
          setCharacters( [] )
          data.map( char => setCharacters( oldChars => [ ...oldChars, char ] ) )
        } else {
          throw Error( 'No hay personajes con ese nombre' )
        }
      }
    }catch( error ) { 
      window.alert( `Error generado: ${ error.message }` ) 
    }
  }
  
  const onClose = id => setCharacters( characters.filter( card => card.id !== id ) )
  const onClear = ()=> setCharacters( [] )
  
  const onRandom = ()=> {
    let nroRand = Math.floor( Math.random() * 827 )
    let cardFound = nroR => characters.filter( card => card.id === nroR ).length !== 0
    
    while( cardFound( nroRand ) ){ 
      nroRand = Math.floor( Math.random() * 827 )
    }

    onSearch( nroRand )
  } 

  return (
    <Background >
      <Routes>
        <Route exact path= '/' element= { <Form login= { login } /> } />
        <Route 
          exact path= '/home' 
          element= { 
            <Home 
              characters= { characters } 
              onClose= { onClose } 
              onSearch= { onSearch } 
              onRandom= { onRandom }
              onClear= { onClear } /> } >
          <Route exact path= '/home/cards' element= { <Cards /> } />
          <Route exact path= '/home/favorites' element= { <Favorites /> } />
          <Route exact path= '/home/about' element= { <About /> } />
          <Route exact path= '/home/detail/:detailId' element= { <Detail /> } />
          <Route exact path= '/home/favorites/detail/:detailId' element= { <Detail /> } />
        </Route>
      </Routes>
    </Background>
  )
}

export default App