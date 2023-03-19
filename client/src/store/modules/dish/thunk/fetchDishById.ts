import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDishById } from '../selectors';
import { TRootState } from '../../../model/storeModel';
import { TProduct } from '../../../model/backendModel';

export const fetchDishById:any = createAsyncThunk<TProduct[], string, 
{rejectValue: string, state: TRootState }>(
  `dish/fetchDishById`,
  async (dishId, { getState , rejectWithValue }) => {
    const locState = getState() as TRootState
    const dish = selectDishById(locState, { dishId });

    if (dish) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/products?productId=${dishId}`
    );

    return await response.json();
  }
);
