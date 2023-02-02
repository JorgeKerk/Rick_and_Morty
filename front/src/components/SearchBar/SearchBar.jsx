import { useState } from 'react'
import styles from './searchBar.module.css'

function SearchBar( { onSearch, onClear } ) {
   const [ input, setInput ] = useState( '' )

   const handleInput = event => setInput( event.target.value )
   const handleClick = () => {
      onSearch( input )
      setInput( '' )
   }

   const handleClear = () => {
      onClear( )
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
               Add Card
         </button>

         <button 
            className= { styles.buttonSearch }
            onClick= { handleClear } >
               Clear all
         </button>
      </div>
   )
}

export default SearchBar