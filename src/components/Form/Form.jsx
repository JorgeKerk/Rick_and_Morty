import { useState } from 'react'
import styles from './Form.module.css'
import validation from '../../validation'
import titleImg from '../../img/Rick_and_Morty_title2.png'

function Form( props ) {
  const [ userData, setUserData ] = useState( { username: '', password: '' } );
  const [ errors, setErrors ] = useState( { username: '', password: '' } )

  const handleInputChange = event => {
    const newObject = { ...userData, [ event.target.name ]: event.target.value }
    setErrors( validation( newObject ) )
    setUserData( newObject )
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    props.login( userData )
  }

  return (
    <div>
      <div className= { styles.divFormGral } >
      <img src={ titleImg } alt= "Title Rick and Morty" />
          <form onSubmit= { handleSubmit } >
              <div className= { styles.divFormContainer } >
                  <div className= { styles.divInputForm } >
                    <label className= { styles.labelForm } htmlFor= 'username' >Username:</label>
                    <input 
                        type= 'text'
                        name= 'username'
                        placeholder= 'Escriba su usuario...'
                        value= { userData.username }
                        onChange= { handleInputChange }
                        className= { styles.inputForm } />
                  </div>

                  { errors.username && <p className= { styles.pForm } > { errors.username } </p> }
                  
                  <div className= { styles.divInputForm } >
                    <label className= { styles.labelForm } htmlFor= 'password' >Password:</label>
                    <input 
                        type= 'password'
                        name= 'password'
                        placeholder= 'Escriba su contraseña'
                        value= { userData.password }
                        onChange= { handleInputChange }
                        className= { ( errors.password && styles.warning ) + ' ' + ( styles.inputForm ) } />
                  </div>

                  { errors.password && <p className= { styles.pForm } > { errors.password } </p> }

                  <button className= { styles.buttonForm } >LOGIN</button>
              </div>
          </form>
      </div>
    </div>
  )
}

export default Form