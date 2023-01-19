import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Cards from '../Cards/Cards'
import styles from './Favorites.module.css'
import { useDispatch } from 'react-redux'
import { orderCards, filterCards } from '../../redux/actions'

function Favorites({myFavorites}) {
  const dispatch = useDispatch()

  const handleChangeOrd = (event)=>{
    dispatch(orderCards(event.target.value))
  }

  const handleChangeFilter = (event)=>{
    dispatch(filterCards(event.target.value))
  }

  useEffect(()=>{
    dispatch(filterCards('none'))
  }, [dispatch])

  return (
    <div>
      <div className={styles.divOrdFil}>
        <div className={styles.divOrder}>
          <h3>Orden </h3>
          <select onChange={handleChangeOrd} name="order" id="order">
            <option value="none">none</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
        <div className={styles.divFilter}>
          <h3>Filtrar por </h3>
          <select onChange={handleChangeFilter} name="fillter" id="fillter">
            <option value="none">none</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <Cards characters={myFavorites} onClose={null} title='MY FAVORITES'/>
    </div>
  )
}

const myStateToProps = (state)=> {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(myStateToProps)(Favorites)