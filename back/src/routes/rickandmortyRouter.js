
const { Router } = require( 'express' )
const getCharById = require( '../controllers/getCharById' )
const getCharDetail = require( '../controllers/getCharDetail' )
const getCharByName = require( '../controllers/getCharByName' )
const { getFavorites, addFavorite, delFavorite } = require( '../controllers/favControllers' )

const rickAndMortyRouter = Router()

rickAndMortyRouter.get( '/character/', async ( req, res )=> {
    const { name } = req.query

    try{
        const character = await getCharByName( name )
       res.status(200).json( character )
    }catch( err ){
        res.status( 500 ).json( { error: err.message } )
    }
})

rickAndMortyRouter.get( '/character/:id', async ( req, res )=> {
    const { id } = req.params

    try{
        const character = await getCharById( id )
        res.status(200).json( character )
    }catch( err ){
        res.status( 500 ).json( { error: err.message } )
    }
})

rickAndMortyRouter.get( '/detail/:detailId', async ( req, res )=> {
    const { detailId } = req.params
    
    try{
        const character = await getCharDetail( detailId )
        res.status(200).json( character )
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