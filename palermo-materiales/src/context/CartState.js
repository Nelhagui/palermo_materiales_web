import { useReducer } from 'react' // ⬅️
import CartContext from './CartContext.js'
import CartReducer from './CartReducer.js' // ⬅️

const CartState = (props) => {
  const initialState = {
    cart: [],
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
  return (
    <CartContext.Provider
      value={{
        cart: globalState.cart,
        addProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
