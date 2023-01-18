import styles from './Nav.module.css'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation } from 'react-router-dom'

export default function Nav({onSearch, onRandom}) {
  const isHome = useLocation().pathname === '/home'
  const isDet = useLocation().pathname.includes('/home/favorites/detail/')

  return (
    <div className={styles.divNav}>
      <div className={styles.divLinksNav}>
        {isDet && (<Link className={styles.link} to='/home/favorites'>
          <h3>{'<-'}</h3>
        </Link>)}
        {!isHome && (<Link className={styles.link} to='/home'>
          <h3>Home</h3>
        </Link>)}
        
        {isHome && (<Link className={styles.link} to='/home/favorites'>
          <h3>Favorites</h3>
        </Link>)}

        {isHome && (<Link className={styles.link} to='/home/about'>
          <h3>About</h3>
        </Link>)}
      </div>

      {isHome && (<div className={styles.divSearch}>
        <button 
          className={styles.buttonNav}
          onClick={onRandom} >
            Random
        </button>
        <SearchBar onSearch={onSearch}/>
      </div>)}
    </div>
  )
}
