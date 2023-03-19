import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { TRestaurant } from '../../../model/backendModel';
import { TRootState } from '../../../model/storeModel';
import { selectRestaurantIds } from '../selectors';

export const fetchRestaurants:any = createAsyncThunk<TRestaurant[], undefined, 
{rejectValue: string, state: TRootState }>(
  `restaurants/fetchRestaurants`,
  async (_, { getState, rejectWithValue }) => {
    console.log('fetchRestaurants');
    const state = getState();

    if (selectRestaurantIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/restaurants/');

    return await response.json();
  }
);
