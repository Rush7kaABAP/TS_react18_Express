import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectRestaurantMenuById } from '../../restaurant/selectors';
import { selectDishIds } from '../selectors';
import { TRootState } from '../../../model/storeModel';
import { TProduct } from '../../../model/backendModel';

export const fetchDishByRestaurantId:any = createAsyncThunk<TProduct[], string, 
{rejectValue: string, state: TRootState }>
  (
  `dish/fetchDishByRestaurantId`,
  async (restaurantId, { getState , rejectWithValue }) => {
    const state = getState() as TRootState;
    const restaurantDishIds = selectRestaurantMenuById(state, { restaurantId });
    const loadedDishIds = selectDishIds(state);

    if (restaurantDishIds === undefined) {

    } else {
      if (restaurantDishIds.every((restaurantDishId:any) =>
        loadedDishIds.includes(restaurantDishId) ) ) {
        return rejectWithValue(LOADING_STATUSES.earlyAdded);
      }
    }
    const response = await fetch(
      `http://localhost:3001/api/products?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);
