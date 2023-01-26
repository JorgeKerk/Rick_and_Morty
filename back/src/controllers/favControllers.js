let { fav } = require( '../utils/data')

const getFavorites = ()=> {
    return fav
}

const addFavorite = ( { id, name, species, gender, image } )=> {
    if( !id || !name || !species || !gender || !image )
        throw Error( 'mising data' )

    const newFav = { id: Number(id), name, species, gender, image }

    fav.push( newFav )
    
    return newFav
}

const delFavorite = ( id )=> {
    if( !id )
        throw Error( 'mising ID' )
    
    const numId = Number( id )

    const charFav = fav.find( char => char.id === numId )

    if( !charFav )
        throw Error( `Card Fav with ID ${ id } not found` )
    
    fav = fav.filter( char => char.id !== numId )

    return numId
}

module.exports = { getFavorites, addFavorite, delFavorite }