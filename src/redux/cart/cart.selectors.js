import { createSelector } from 'reselect';

// input selector only for the cart state not the whole state
const selectCart = state => state.cart;

// memoized selector for the cart and its items
export const  selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// selects only the smaller piece not the whole state (just the cart items) and uses reduce to output the total quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalQuantity, cartItem) => 
      totalQuantity + cartItem.quantity,
      0
    )
)

