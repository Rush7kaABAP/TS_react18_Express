import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { TReview } from '../../../model/backendModel';
import { TRootState } from '../../../model/storeModel';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

// declare type AsyncThunkConfig = {
//   state?: unknown;
//   dispatch?: Dispatch;
//   extra?: unknown;
//   rejectValue?: unknown;
//   serializedErrorType?: unknown;
//   pendingMeta?: unknown;
//   fulfilledMeta?: unknown;
//   rejectedMeta?: unknown;
// };


export const fetchReviewsByRestaurantId: any = createAsyncThunk<TReview[], string, 
  {rejectValue: string, state: TRootState }>(
  `review/fetchReviewByRestaurantId`,
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurantReviewIds = selectRestaurantReviewsById(state, {
      restaurantId,
    });
    const loadedReviewIds = selectReviewIds(state);
    if (restaurantReviewIds === undefined) {

    } else {
      if ( restaurantReviewIds.every((restaurantReviewId: string) =>
              loadedReviewIds.includes(restaurantReviewId))) {
        return rejectWithValue(LOADING_STATUSES.earlyAdded);
      }
    }

    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return (await response.json()) as TReview[];
  }
);
