const initialState = {
  cartCount: 0,
  CartCost: 0,
  Cart: [],
};

const cartReducer = (state = initialState, action) => {
  let index;
  let newState;
  switch (action.type) {
    case "ADDCART":
      return {
        cartCount: state.cartCount + 1,
        Cart: [...state.Cart, action.payload],
        CartCost: state.CartCost + action.payload.price,
      };
    case "GETCART":
      return { Cart: [...state.Cart] };
    case "DELETECART":
      index = state.Cart.findIndex((item) => item._id === action.payload._id);
      newState = [...state];
      if (index !== -1) newState.Cart.slice(index, 1);
      return { Cart: newState };
    default:
      return state;
  }
};
export default cartReducer;
