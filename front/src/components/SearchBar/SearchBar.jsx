import { useState } from 'react'
import styles from './searchBar.module.css'

function SearchBar( { onSearch } ) {
   const [ input, setInput ] = useState( '' )

   const handleInput = event => setInput( event.target.value )
   const handleClick = () => {
      onSearch( input )
      setInput( '' )
   }
   
   return (
      <div className= { styles.divSearch } >
         <input 
            className= { styles.inputSearch } 
            type= 'search' 
            onChange= { handleInput } 
            value= { input } />

         <button 
            className= { styles.buttonSearch } 
            onClick= { handleClick } >
               Add Card by ID
         </button>
      </div>
   )
}

export default SearchBar