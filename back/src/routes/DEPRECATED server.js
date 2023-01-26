// const http = require( 'http' )

// WEB SERVER
// const characters = require('../utils/data')

// const PORT = 3001

// http.createServer( ( req, res )=> {
    // res.setHeader('Access-Control-Allow-Origin', '*')
//     console.log(`Server listen in port ${PORT}`)

//     const url = req.url

//     if( url.includes( '/rickandmorty/character' ) ){
//         const id = url.split( '/' ).at(-1)
//         const character = characters.find( char => char.id === Number(id) )

//         if( character ){
//             res.writeHead(  200, { 'Content-Type': 'application/json' } )
//             res.end( JSON.stringify( character ) )
//         }else{
//             res.writeHead(  404, { 'Content-Type': 'text/plain' } )
//             res.end( `Card with ID ${ id} not found` )
//         }

//         return
//     }

//     res.writeHead(  404, { 'Content-Type': 'text/plain' } )
//     res.end( `Page not found` )
// }).listen( PORT, ()=>{
//     console.log( `http://localhost:${PORT}`)
// } )
//  FIN WEB SERVER

// PROMISES

// const getCharById = require( '../controllers/getCharById')
// const getCharDetail = require( '../controllers/getCharDetail')
// const PORT = 3001

// http.createServer( ( req, res )=> {
//     res.setHeader('Access-Control-Allow-Origin', '*')
    
//     if( req.url.includes( 'onsearch' ) ){
//         const id = req.url.split( '/' ).at( -1 )
//         if( id ) getCharById( res, id )
//         return
//     }
//     if( req.url.includes( 'detail' ) ){
//         const id = req.url.split( '/' ).at( -1 )
//         if( id ) getCharDetail( res, id )
//         return
//     }
// }).listen( PORT, ()=>{
//         console.log( `http://localhost:${ PORT }`)
// } )
