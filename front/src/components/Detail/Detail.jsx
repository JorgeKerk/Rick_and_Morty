import { useEffect, useState } from 'react'
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detail( props ) {
  const { detailId } = useParams()
  const [ character, setCharacter ] = useState( {} )

  useEffect( () => {
    axios(`http://localhost:3001/rickandmorty/detail/${ detailId }`)
      .then( ( { data } ) => {
        if( data.name ) {
          setCharacter( data );
        } else {
          throw Error( "No hay personajes con ese ID" );
        }
      })
      .catch( error => window.alert( `Error generado: ${ error.message }` ) )

    return setCharacter( {} );
  }, [ detailId ] );
  
  return ( 
    <div className= { styles.divContDetail } >
        <div >
          <h1>NOMBRE: <span> { character?.name } </span></h1>
          <h3>STATUS: <span> { character?.status } </span></h3>
          <h3>ESPECIE: <span> { character?.species } </span></h3>
          <h3>GÉNERO: <span> { character?.gender } </span></h3>
          <h3>ORIGEN: <span> { character?.origin?.name } </span></h3>
        </div>
        <img src= { character.image } alt= { character.name } />
    </div>
  )
}

export default Detail