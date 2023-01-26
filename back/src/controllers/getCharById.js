const axios = require( 'axios' )

const getCharById = async ( idChar )=> {
    if( !idChar ) throw Error( "ID not defined" )
    
    const { data: { id, image, name, gender, species } } =
        await axios( `https://rickandmortyapi.com/api/character/${ idChar }` )

    return { id, image, name, gender, species } 
}

module.exports = getCharById