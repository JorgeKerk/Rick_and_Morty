import React from 'react'
import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation } from 'react-router-dom'

function Nav( { onSearch, onRandom, onClear } ) {
  const isHome = useLocation().pathname === '/home'
  const isDet = useLocation().pathname.includes( '/home/favorites/detail/' )

  return (
    <div className= { styles.divNav } >
      <div className= { styles.divLinksNav } >
        { !isHome && ( <Link className= { styles.link } to= '/home' >
          <h3>Home</h3>
        </Link> ) }
        
        { ( isHome || isDet ) && ( <Link className= { styles.link } to= '/home/favorites' >
          <h3>Favorites</h3>
        </Link> ) }

        { isHome && ( <Link className= { styles.link } to= '/home/about' >
          <h3>About</h3>
        </Link> ) }
      </div>

      { isHome && ( <div className= { styles.divSearch } >
        <button 
          className= { styles.buttonNav }
          onClick= { onRandom } >
            Random
        </button>
        <SearchBar onSearch= { onSearch } onClear= { onClear } />
      </div> ) }
    </div>
  )
}

export default Nav