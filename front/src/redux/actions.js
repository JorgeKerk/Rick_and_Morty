import axios from "axios"

export const GET_FAVORITES = 'GET-FAVORITES'
export const ADD_FAVORITES = 'ADD-FAVORITES'
export const DEL_FAVORITES = 'DELETE-FAVORITES'
export const FILTER_CARDS = 'FILTER'
export const ORDER_CARDS = 'ORDER'

export const getFavorites = ()=>{
    return async ( dispatch )=> {
        try{
            const { data } = await axios( 'http://localhost:3001/rickandmorty/fav' )
            dispatch( { type: GET_FAVORITES, payload: data } )
        } catch( error ){
            console.log( `Error del GET en Favoritos: ${ error.message }`)
        }
    }
}

export const addFavorites = card => {
    return async ( dispatch )=> {
        try {
            const { data } = await axios.post( 'http://localhost:3001/rickandmorty/fav', card )
            dispatch( { type: ADD_FAVORITES, payload: data } )
        } catch( error ){
            console.log( `Error del POST en Favoritos: ${ error.message }`)
        }
    }
}

export const delFavorites = id => { 
    return async ( dispatch )=> {
        try {
            const { data } = await axios.delete( `http://localhost:3001/rickandmorty/fav/${ id }` )
            dispatch( { type: DEL_FAVORITES, payload: data } )
        } catch( error ){
            console.log( `Error del DELETE en Favoritos: ${ error.message }`)
        }
    }
}

export const filterCards = status => ( { type: FILTER_CARDS, payload: status } )

export const orderCards = id => ( { type: ORDER_CARDS, payload: id } )