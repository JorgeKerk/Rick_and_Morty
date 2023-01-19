import styles from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorites, delFavorites } from '../../redux/actions';
import { useEffect, useState } from 'react';

function Card(props) {
   const {id, name, species, gender, image, onClose, myFavorites, addFavorites, delFavorites} = props
   const [isFav, setIsFav] = useState(false)
   const isPathInFav = useLocation().pathname === '/home/favorites'

   const handleFavorite = ()=>{
      setIsFav(!isFav)
      if(isFav){
         delFavorites(id)
      } else {
         addFavorites({id, name, species, gender, image})
      }
   }

   useEffect( ()=> setIsFav(myFavorites.find(card => card.id === id)), [id, isFav, myFavorites])

   return (
      <div className={styles.divCardContainer}>
         {
            isFav ? (<button className={onClose? styles.buttonFav: styles.fix_button} onClick={onClose && handleFavorite}>{onClose? '❤️': ' '}</button>
            ) : (
               <button className={onClose? styles.buttonFav: styles.fix_button} onClick={onClose && handleFavorite}>{onClose? '🤍': ' '}</button>
            )
         }
         <h3 className={onClose && styles.numCard}>{`Card N° ${id}`}</h3>

         <button className={onClose? styles.buttonClose: styles.fix_button} onClick={()=>onClose(id)}>{onClose? 'X': ' '}</button>
         <Link to= {isPathInFav? `/home/favorites/detail/${id}`:`/home/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2 className={styles.specie}>{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
         <img className={styles.image} src={image} alt="" />
      </div>
   );
}

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFavorites: (card)=> dispatch(addFavorites(card)),
      delFavorites: (id)=> dispatch(delFavorites(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)