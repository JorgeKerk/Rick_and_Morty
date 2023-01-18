export const ADD_FAVORITES = 'ADD-FAVORITES'
export const DEL_FAVORITES = 'DELETE-FAVORITES'
export const FILTER_CARDS = 'FILTER'
export const ORDER_CARDS = 'ORDER'

export const addFavorites = (card)=>( {type: ADD_FAVORITES, payload: card} )
export const delFavorites = (id)=>( {type: DEL_FAVORITES, payload: id} )
export const filterCards = (status)=>( {type: FILTER_CARDS, payload: status} )
export const orderCards = (id)=>( {type: ORDER_CARDS, payload: id} )