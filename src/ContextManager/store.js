import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartSlice';
import { currencySlice } from './CurrencySlice';
import { currentCategorySlice } from './CurrentCategorySlice';
import { localStorageMiddleware } from './localStorageMiddleware';

const store = configureStore({
  reducer: { currency: currencySlice.reducer, cart: cartSlice.reducer, category: currentCategorySlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});
export default store;
