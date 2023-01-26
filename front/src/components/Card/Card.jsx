import { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorites, delFavorites } from '../../redux/actions'

function Card( { id, name, species, gender, image, onClose } ) {
   const dispatch = useDispatch()
   const { myFavorites } = useSelector( state => state )
   const [ isFav, setIsFav ] = useState( false )
   const isPathInFav = useLocation().pathname === '/home/favorites'

   const handleFavorite = ()=>{
      setIsFav( !isFav )
      if( isFav ){
         dispatch( delFavorites( id ) )
      } else {
        dispatch( addFavorites( { id, name, species, gender, image } ) )
      }
   }

   useEffect( ()=> setIsFav( myFavorites.find( card => card.id === id ) ), [ id, myFavorites ] )

   return (
      <div className= { styles.divCardContainer } >
         {
            isFav ? 
                 <button 
                     className= { onClose? styles.buttonFav: styles.fix_button } 
                     onClick= { onClose && handleFavorite } > 
                        { onClose? '❤️': ' ' } 
                  </button>
                : 
                  <button 
                     className= { onClose? styles.buttonFav: styles.fix_button } 
                     onClick={ onClose && handleFavorite } >
                        { onClose? '🤍': ' '}
                  </button>
         }

         <h3 className= { onClose && styles.numCard } > { `Card N° ${id}` } </h3>

         <button 
            className= { onClose? styles.buttonClose: styles.fix_button }
            onClick= { ()=> onClose( id ) } >
               {onClose? 'X': ' '}
         </button>
         
         <Link to= { isPathInFav? `/home/favorites/detail/${id}`: `/home/detail/${id}` } >
            <h2 className= { styles.name } > { name } </h2>
         </Link>

         <h2 className= { styles.specie } > { species } </h2>
         <h2 className= { styles.gender } > { gender } </h2>
         <img className= { styles.image } src= { image } alt= {name} />
      </div>
   )
}

export default Card