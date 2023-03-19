import { combineReducers } from 'redux';
import { cartReducer } from './modules/cart';
import { restaurantSlice } from './modules/restaurant';
import { reviewSlice } from './modules/review';
import { userSlice } from './modules/user';
import { configureStore } from '@reduxjs/toolkit';
// import { logger } from './middleware/logger';
import { dishSlice } from './modules/dish';

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any): Array<any> => {
    return getDefaultMiddleware();
    // return [...getDefaultMiddleware(), logger] 
  }
});