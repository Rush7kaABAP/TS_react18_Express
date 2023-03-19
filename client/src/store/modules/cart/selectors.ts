// const EMPTY_OBJECT = {};
// const EMPTY_ARRAY = [];

import { TCartState } from ".";
import { TRootState } from "../../model/storeModel";

export const selectCart = (state:TRootState): TCartState => state.cart;

export const selectCartDishIds = (state:TRootState) => Object.keys(selectCart(state));

export const selectDishCountByName = (state:TRootState, { dishId }:any) =>
  selectCart(state)[dishId] || 0;
