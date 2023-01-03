import { useReducer } from 'react' // ⬅️
import CartContext from './CartContext.js'
import CartReducer from './CartReducer.js' // ⬅️

const CartState = (props) => {
  const initialState = {
    cart: [],
    cotizarFilter: [],
  }

  const [globalState, dispatch] = useReducer(CartReducer, initialState) // ⬅️

  // Define reducer actions
  function addProduct(cart) {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: cart,
    })
  }

  function deleteProduct(cart) {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: cart,
    })
  }

  function addFilter(cotizarFilter) {
    dispatch({
      type: 'ADD_FILTER',
      payload: cotizarFilter,
    })
  }
  return (
    <CartContext.Provider
      value={{
        cart: globalState.cart,
        cotizarFilter: globalState.cotizar,
        addProduct,
        deleteProduct,
        addFilter,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
