import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'

export default function Detail(props) {
  const { detailId } = useParams()
  const [character, setCharacter] = React.useState({})

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  
  return ( 
    <div className={styles.divContDetail}>
        <div >
          <h1>NOMBRE: <span>{character?.name}</span></h1>
          <h3>STATUS: <span>{character?.status}</span></h3>
          <h3>ESPECIE: <span>{character?.species}</span></h3>
          <h3>GÉNERO: <span>{character?.gender}</span></h3>
          <h3>ORIGEN: <span>{character?.origin?.name}</span></h3>
        </div>
        <img src={character.image} alt={character.name} />
    </div>
  )
}
