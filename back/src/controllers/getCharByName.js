// https://rickandmortyapi.com/api/character/?name=Rick
const axios = require( 'axios' )

const getCharByName = async ( nameChar )=> {
    if( !nameChar ) throw Error( "Name not defined" )
    
    let characters =
        await axios( `https://rickandmortyapi.com/api/character/?name=${ nameChar }` )
       
    characters = characters.data.results.map( ({ id, image, name, gender, species }) => ({ id, image, name, gender, species }) )
    
    return characters
}

module.exports = getCharByName