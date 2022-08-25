import { createSlice } from "@reduxjs/toolkit";

// product={
//     quantity:number,
//     id: string,
//     attributes:{
//         attributes....
//     }
// }
const initialState = {
  cartProducts: JSON.parse(localStorage.getItem("cart")) || [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      const existingProductIndex = state.cartProducts.findIndex(
        (product) =>
          product.id === action.payload.id &&
          JSON.stringify(product.selectedAttributes) ===
            JSON.stringify(action.payload.selectedAttributes)
      );
      if (existingProductIndex < 0) {
        state.cartProducts.push(action.payload);
      } else {
        state.cartProducts[existingProductIndex].quantity++;
      }
    },
    removeProduct: (state, action) => {
      const existingProductIndex = state.cartProducts.findIndex(
        (product) =>
          product.id === action.payload.id &&
          JSON.stringify(product.selectedAttributes) ===
            JSON.stringify(action.payload.selectedAttributes)
      );
      if (state.cartProducts[existingProductIndex].quantity === 1) {
        state.cartProducts.splice(existingProductIndex, 1);
      } else {
        state.cartProducts[existingProductIndex].quantity--;
      }
    },
  },
});
export const { addNewProduct, removeProduct } = cartSlice.actions;
