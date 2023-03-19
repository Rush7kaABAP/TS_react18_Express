import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct } from '../../../model/backendModel';
import { TRootState } from '../../../model/storeModel';

export const fetchDishes:any = createAsyncThunk<TProduct[], undefined, 
{rejectValue: string, state: TRootState }>
(`dish/fetchDishes`, async () => {
  const response = await fetch(`http://localhost:3001/api/products`);

  return await response.json();
});
