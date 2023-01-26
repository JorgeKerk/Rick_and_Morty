
const { Router } = require( 'express' )
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const { getFavorites, addFavorite, delFavorite } = require( '../controllers/favControllers' )

const rickAndMortyRouter = Router()

rickAndMortyRouter.get( '/character/:id', ( req, res )=> {
    const { id } = req.params

    try{
        getCharById( id )
        .then( char => res.status(200).json( char ) )
    }catch( err ){
        res.status( 500 ).json( { error: err.message } )
    }
})

rickAndMortyRouter.get( '/detail/:detailId', ( req, res )=> {
    const { detailId } = req.params
    
    try{
        getCharDetail( detailId )
        .then( char => res.status(200).json( char ) )
    }catch( err ){
        res.status( 500 ).json( { error: err.message } )
    }
})

rickAndMortyRouter.get( '/fav', ( req, res )=> {
    res.status( 200 ).json( getFavorites() )
})

rickAndMortyRouter.post( '/fav', ( req, res )=> {
    try{
        res.status( 200 ).json( addFavorite( req.body ) )
    }catch( err ){
        res.status( 400 ).json( { error: err.message } )
    }
})

rickAndMortyRouter.delete( '/fav/:id', ( req, res )=> {
    const { id } = req.params

    try{
        res.status( 200 ).json( delFavorite( id ) )
    }catch( err ){
        res.status( 400 ).json( { error: err.message } )
    }
})

module.exports = rickAndMortyRouter