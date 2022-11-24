import React, { useReducer } from 'react'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cart: action.payload,
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case 'ADD_FILTER':
      return {
        ...state,
        cotizarFilter: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer
