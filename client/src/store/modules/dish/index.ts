import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { TProduct } from '../../model/backendModel';
import { fetchDishById } from './thunk/fetchDishById';
import { fetchDishByRestaurantId } from './thunk/fetchDishByRestaurantId';
import { fetchDishes } from './thunk/fetchDishes';

export const dishEntityAdapter = createEntityAdapter<TProduct>({selectId: (user) => user.id});;

export const entitySelectors = dishEntityAdapter.getSelectors();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(fetchDishByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchDishByRestaurantId.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchDishByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      })
      .addCase(fetchDishes.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchDishes.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchDishes.rejected, (state) => {
        state.loadingStatus = LOADING_STATUSES.failed;
      })
      .addCase(fetchDishById.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchDishById.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertOne(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchDishById.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
