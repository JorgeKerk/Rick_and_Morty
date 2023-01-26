const axios = require( 'axios' )

const getCharDetail = async ( idChar )=> {
    if( !idChar ) throw Error( "ID not defined" )

    const { data: { id, image, name, gender, species, status, origin } } =
        await axios( `https://rickandmortyapi.com/api/character/${ idChar }` )
    
    return { id, image, name, gender, species, status, origin } 
}

module.exports = getCharDetail