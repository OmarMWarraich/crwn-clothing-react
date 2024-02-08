const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = (state) => selectCartReducer(state).isCartOpen;

export const selectCartItems = (state) => selectCartReducer(state).cartItems;

export const selectCartTotal = (state) => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
};

export const selectCartCount = (state) => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
};
