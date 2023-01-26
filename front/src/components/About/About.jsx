import React from 'react'
import styles from './About.module.css'

function About( props ) {
  return (
    <div className= { styles.divContAbout } >
        <h1>ACERCA DE MÍ !!!</h1>
        <p>Mi nombre es <strong>JORGE KERK</strong> y soy <i><u>Analista Programador Universitario</u></i> egresado en la Universidad Nacional de la Patagonia San Juan Bosco (U.N.P.S.J.B.) en el año 2006. Actualmente estoy realizando un curso de <u>DESARROLLO WEB FULL STACK</u> en la Universidad Tecnológica Nacional (U.T.N.) y en <strong>SOY HENRY</strong>.</p>
        <br />
        <p>Dejo mis contactos por si deseas conocerme mas:</p>
        <ul>
          <li> <a href="https://github.com/JorgeKerk" target="_blank" rel="noreferrer">GitHub</a></li>
          <li>PROTFOLIO: <a href="https://jorgekerk.github.io/TP1-Web-personal-UTN/#secIdMain" target="_blank" rel="noreferrer">Página Web Personal</a></li>
          <li>Email: <a href="mailto:jorgekerk@gmail.com">jorgekerk@gmail.com</a></li>
        </ul>
    </div>
  )
}

export default About