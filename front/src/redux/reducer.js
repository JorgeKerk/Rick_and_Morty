import { GET_FAVORITES, ADD_FAVORITES, DEL_FAVORITES, FILTER_CARDS, ORDER_CARDS } from "./actions"

const initialState = {
    myFavorites: [],
    allMyFavorites: [],
    order: 'none',
    filter: 'none'
}

const orderFav = ( array, payload ) => {
    array.sort( ( a, b ) => {
        if( a.id > b.id ) return payload === 'Ascendente'? 1: -1
        if( a.id < b.id ) return payload === 'Descendente'? 1: -1
        return 0
    } )
}

const reducer = ( state = initialState, { type, payload } ) => {
    switch( type ) {
        case GET_FAVORITES: {
            return {
                ...state,
                myFavorites: payload,
                allMyFavorites: [ ...payload ]
            }
        }
        case ADD_FAVORITES: {
            const newArrayFav = [ ...state.allMyFavorites, payload ]
            return {
                ...state,
                myFavorites: newArrayFav,
                allMyFavorites: [ ...newArrayFav ]
            }
        }
        case DEL_FAVORITES:
            const newArrayDel = state.myFavorites.filter( card => card.id !== payload )
            return {
                ...state,
                myFavorites: newArrayDel,
                allMyFavorites: [ ...newArrayDel ]
            }
        case FILTER_CARDS: {
            const filterCards = [ ...state.allMyFavorites ]

            if( state.order !== 'none' ) orderFav( filterCards, state.order )

            return {
                ...state,
                myFavorites: payload === 'none'? filterCards: filterCards.filter( card => card.gender === payload ),
                filter: payload
            }
        }
        case ORDER_CARDS:{
            const orderCards = [ ...state.allMyFavorites ]

            if( payload !== 'none' ) orderFav( orderCards, payload )

            return {
                ...state,
                myFavorites: state.filter === 'none'? orderCards: orderCards.filter( card => card.gender === state.filter ),
                order: payload
            }
        }
        default:
            return { ...state }
    }
}

export default reducer